"use client";

import { useEffect, useState, useCallback } from "react";
import { Clock, ChevronLeft, ChevronRight, Check } from "lucide-react";
import "@/app/globals.css";

export default function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeSpent, setTimeSpent] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [questionAnswers, setQuestionAnswers] = useState({}); // Track answers for each question

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = questions.length
    ? (answeredQuestions.size / questions.length) * 100
    : 0;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/api/questions");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => setTimeSpent((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Update selectedAnswer when changing questions
  useEffect(() => {
    setSelectedAnswer(questionAnswers[currentQuestionIndex] || null);
  }, [currentQuestionIndex, questionAnswers]);

  // Keyboard shortcuts with memoized handler
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key >= "1" && e.key <= "4") {
        const optionIndex = parseInt(e.key) - 1;
        if (currentQuestion?.options[optionIndex]) {
          handleAnswer(currentQuestion.options[optionIndex].split(".")[0]);
        }
      }
      if (e.key === "ArrowLeft" && currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1);
        setSelectedAnswer(null);
      }
      if (
        e.key === "ArrowRight" &&
        selectedAnswer &&
        currentQuestionIndex < questions.length - 1
      ) {
        handleNext();
      }
    },
    [currentQuestion, currentQuestionIndex, selectedAnswer, questions.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const handleSubmit = async (questionId, answer) => {
    try {
      const response = await fetch(`/api/problems/${questionId}/submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        window.location.href = "/results";
      } else {
        alert(data.message || "답안 제출에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      alert("답안 제출 중 오류가 발생했습니다.");
    }
  };

  const handleAnswer = (select) => {
    // Toggle selection if clicking the same answer
    if (selectedAnswer === select) {
      setSelectedAnswer(null);
      setAnsweredQuestions((prev) => {
        const updated = new Set(prev);
        updated.delete(currentQuestionIndex);
        return updated;
      });
      setQuestionAnswers((prev) => {
        const updated = { ...prev };
        delete updated[currentQuestionIndex];
        return updated;
      });
    } else {
      setSelectedAnswer(select);
      setAnsweredQuestions((prev) => {
        const updated = new Set(prev);
        updated.add(currentQuestionIndex);
        return updated;
      });
      setQuestionAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: select,
      }));
    }
  };

  const handleNext = () => {
    if (selectedAnswer && !isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Modify navigation to not reset selectedAnswer
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#e6f7f7] via-white to-[#e6f7f7] p-6">
        <div className="text-center text-gray-500">문제를 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7f7] via-white to-[#e6f7f7] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>
                  {Math.floor(timeSpent / 60)}:
                  {(timeSpent % 60).toString().padStart(2, "0")}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                풀이 진행률:{" "}
                <span className="text-[#6DB1B2] font-semibold">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              현재 문제: {currentQuestionIndex + 1} / {questions.length}
            </div>
          </div>

          {/* Question Mini-map */}
          <div className="mt-4 flex gap-2 overflow-x-auto py-2">
            {questions.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentQuestionIndex(idx);
                  setSelectedAnswer(null);
                }}
                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all
                  ${
                    currentQuestionIndex === idx
                      ? "bg-[#6DB1B2] text-white"
                      : questionAnswers[idx]
                      ? "bg-[#6DB1B2]/20 text-[#6DB1B2] ring-1 ring-[#6DB1B2]"
                      : "bg-gray-50 text-gray-600 hover:bg-[#6DB1B2]/10"
                  }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Question Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          {/* Status Badge */}
          <div className="mb-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm
              ${
                answeredQuestions.has(currentQuestionIndex)
                  ? "bg-[#6DB1B2]/10 text-[#6DB1B2]"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {answeredQuestions.has(currentQuestionIndex)
                ? "풀이 완료"
                : "미풀이"}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 leading-relaxed mb-8">
            {currentQuestion?.question}
          </h2>

          <div className="space-y-4">
            {currentQuestion?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.split(".")[0])}
                className={`group w-full p-6 rounded-xl text-left transition-all duration-300 relative
                  ${
                    selectedAnswer === option.split(".")[0]
                      ? "bg-[#6DB1B2] text-white shadow-lg transform -translate-y-1"
                      : "bg-white border-2 border-gray-100 hover:border-[#6DB1B2] hover:bg-[#6DB1B2]/5"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium
                    ${
                      selectedAnswer === option.split(".")[0]
                        ? "bg-white/20"
                        : "bg-[#6DB1B2]/10 text-[#6DB1B2]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="text-lg">{option.split(".")[1]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-8 border-t border-gray-100">
            <button
              className="flex items-center gap-2 px-6 py-3 text-[#6DB1B2] font-medium hover:bg-[#6DB1B2]/10 rounded-lg disabled:opacity-50"
              disabled={currentQuestionIndex === 0}
              onClick={handlePrevious}
            >
              <ChevronLeft className="w-5 h-5" />
              이전 문제
            </button>

            {isLastQuestion ? (
              <button
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all
                  ${
                    selectedAnswer
                      ? "bg-[#6DB1B2] text-white hover:bg-[#5AA0A1]"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                disabled={!selectedAnswer}
                onClick={() => handleSubmit(currentQuestion.id, selectedAnswer)}
              >
                답안 제출
                <Check className="w-5 h-5" />
              </button>
            ) : (
              <button
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all
                  ${
                    selectedAnswer
                      ? "bg-[#6DB1B2] text-white hover:bg-[#5AA0A1]"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                disabled={!selectedAnswer}
                onClick={handleNext}
              >
                다음 문제
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
