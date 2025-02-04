import { useState } from "react";
import { useQuestionContext } from "@/contexts/QuestionContext";

const QuestionArea = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    handleSubmit,
  } = useQuestionContext();
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const answer = (select) => {
    setSelectedAnswer(select);
  };

  const handleNext = () => {
    if (selectedAnswer && !isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // 다음 문제로 넘어갈 때 선택 초기화
    }
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>진행도</span>
          <span>
            문제 {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#6DB1B2] transition-all duration-500"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          />
        </div>
      </div>

      {/* Question Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-2 bg-[#6DB1B2]/10 text-[#6DB1B2] rounded-full font-semibold">
            Question {currentQuestionIndex + 1}
          </span>
          <span className="text-sm text-gray-500">
            {selectedAnswer ? "선택완료" : "미선택"}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
          {currentQuestion.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => answer(option.split(".")[0])}
            className={`group w-full p-6 rounded-xl text-left transition-all duration-300 
              ${
                selectedAnswer === option.split(".")[0]
                  ? "bg-[#6DB1B2] text-white shadow-lg transform -translate-y-1"
                  : "bg-white border-2 border-gray-100 hover:border-[#6DB1B2] hover:bg-[#6DB1B2]/5 hover:shadow-md"
              }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-lg
                ${
                  selectedAnswer === option.split(".")[0]
                    ? "bg-white/20"
                    : "bg-[#6DB1B2]/10 text-[#6DB1B2] group-hover:bg-[#6DB1B2]/20"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-lg">{option.split(".")[1]}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-100">
        <button
          className="flex items-center gap-2 px-6 py-3 text-[#6DB1B2] font-medium hover:bg-[#6DB1B2]/10 rounded-lg transition-colors"
          disabled={currentQuestionIndex === 0}
          onClick={() => {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer(null);
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          이전 문제
        </button>

        {isLastQuestion ? (
          <button
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300
              ${
                selectedAnswer
                  ? "bg-[#6DB1B2] text-white hover:bg-[#5AA0A1] shadow-lg"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            disabled={!selectedAnswer}
            onClick={() => handleSubmit(currentQuestion.id, selectedAnswer)}
          >
            답안 제출
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        ) : (
          <button
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300
              ${
                selectedAnswer
                  ? "bg-[#6DB1B2] text-white hover:bg-[#5AA0A1] shadow-lg"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            disabled={!selectedAnswer}
            onClick={handleNext}
          >
            다음 문제
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionArea;
