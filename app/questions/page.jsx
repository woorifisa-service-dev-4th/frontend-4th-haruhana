"use client";

import { useState } from "react";
import QuestionSidebar from "@/components/problems/QuestionSideBar";
import QuestionArea from "@/components/problems/QuestionArea";
import QuestionHeader from "@/components/problems/QuestionHeader";
import "../globals.css";

export default function QuestionPage() {
  const [questionStatus, setQuestionStatus] = useState([null, null, null, null, null]); // 문제 상태
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부

  // 문제 제출 핸들러
  const handleSubmit = (answered, isCorrect, questionIndex) => {
    if (!answered) {
      setShowModal(true); // 문제를 풀지 않은 경우 모달 표시
      return;
    }

    // 정답 여부에 따라 상태 업데이트
    setQuestionStatus((prev) =>
      prev.map((status, index) =>
        index === questionIndex ? (isCorrect ? "O" : "X") : status
      )
    );
  };

  return (
    <>
      <QuestionHeader />

      <div className="flex h-screen bg-gray-100">
        {/* 사이드바 */}
        <QuestionSidebar questionStatus={questionStatus} />

        {/* 문제 풀이 영역 */}
        <div className="flex-1 flex flex-col items-center mt-12">
          <QuestionArea questionIndex={0} onSubmit={handleSubmit} />
        </div>
      </div>

      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-800">문제를 풀고 제출해주세요!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-[#6DB1B2] text-white rounded-md hover:bg-[#5AA0A1] transition"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
