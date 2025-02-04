"use client";

import { useEffect, useState } from "react";
import QuestionSidebar from "@/components/problems/QuestionSideBar";
import QuestionArea from "@/components/problems/QuestionArea";
import QuestionHeader from "@/components/problems/QuestionHeader";
import "../globals.css";

export default function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  const progress = questions.length
    ? ((currentQuestionIndex + 1) / questions.length) * 100
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7f7] via-white to-[#e6f7f7]">
      <QuestionHeader progress={progress} />
      <div className="flex p-6 gap-6">
        <QuestionSidebar
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
        <div className="flex-1 flex flex-col items-center">
          <QuestionArea
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
