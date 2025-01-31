import { useState } from "react";
import { useQuestionContext } from "@/contexts/QuestionContext";

const QuestionArea = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { questions, currentQuestionIndex, handleSubmit } = useQuestionContext();
  const currentQuestion = questions[currentQuestionIndex];

  const answer = (select) => {
    setSelectedAnswer(select);
  };

  // const submit = () => {
  //   if (selectedAnswer) {
  //     handleSubmit(currentQuestion.id, selectedAnswer);
  //   }
  // };

  return (
    <div className="w-[90%] min-h-[700px] bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
      <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#6DB1B2] to-[#4A8E8F] bg-clip-text text-transparent">
        문제 {currentQuestionIndex + 1}
      </h1>
      <p className="text-gray-600 mb-8">{currentQuestion.question}</p>

      <div className="flex flex-col gap-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => answer(option.split(".")[0])}
            className={`h-[60px] w-full text-left px-6 rounded-xl ${selectedAnswer === option.split(".")[0]
                ? "bg-[#6DB1B2] text-white"
                : "border border-gray-200 hover:border-[#6DB1B2]"
              }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button
          // onClick={submit}
          className="h-[50px] w-[120px] bg-[#6DB1B2] text-white rounded-xl font-medium hover:bg-[#5AA0A1] transition-colors"
        >
          제출
        </button>
      </div>
    </div>
  );
};

export default QuestionArea;