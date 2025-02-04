"use client";
import { createContext, useContext, useState } from "react";

const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([
    // ...existing questions data...
  ]);

  const handleSubmit = async (questionId, answer) => {
    try {
      // API 호출 예시
      const response = await fetch("/api/submit-answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId,
          answer,
        }),
      });

      if (response.ok) {
        // 성공적으로 제출된 경우
        alert("답안이 성공적으로 제출되었습니다.");
        // 필요한 경우 결과 페이지로 리다이렉트
        window.location.href = "/results";
      } else {
        const data = await response.json();
        alert(data.message || "답안 제출에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      alert("답안 제출 중 오류가 발생했습니다.");
    }
  };

  const value = {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    handleSubmit, // handleSubmit 함수 추가
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error(
      "useQuestionContext must be used within a QuestionProvider"
    );
  }
  return context;
};
