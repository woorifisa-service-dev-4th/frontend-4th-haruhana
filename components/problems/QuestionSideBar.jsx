"use client";

import { useState } from "react";

const QuestionSidebar = () => {
  // 각 문제에 대한 상태 (O/X 여부)
  const [questionStatus, setQuestionStatus] = useState([
    null, // 문제 1
    null, // 문제 2
    null, // 문제 3
    null, // 문제 4
    null, // 문제 5
  ]);

  // 테스트용 상태 변경 함수
  const toggleStatus = (index) => {
    setQuestionStatus((prev) =>
      prev.map((status, i) => (i === index ? (status === "O" ? "X" : "O") : status))
    );
  };

  return (
    <div className="w-1/5 bg-[#E0F4F4] p-4 flex flex-col items-center gap-10">
      {/* 아이콘 (상단) */}
      <div className="text-[#6DB1B2]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132a4.992 4.992 0 10-.537 7.007l2.08-3.012a2 2 0 012.654-1.868l3.197 2.132a4.992 4.992 0 10.537-7.007l-2.08 3.012a2 2 0 01-2.654 1.868z"
          />
        </svg>
      </div>

      {/* 문제 번호 버튼과 상태 표시 */}
      {questionStatus.map((status, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 w-full"
        >
          <button
            onClick={() => toggleStatus(index)} // 상태 변경
            className="w-full h-12 bg-gradient-to-b from-[#9CD6D7] to-[#6DB1B2] rounded-full shadow-md flex items-center justify-center text-white font-medium hover:opacity-90 transition"
          >
            {index + 1}
          </button>
          {/* O/X 여부 표시 */}
          <span className={`text-sm font-medium ${status === "O" ? "text-green-500" : status === "X" ? "text-red-500" : "text-gray-400"}`}>
            {status || "미정"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuestionSidebar;

