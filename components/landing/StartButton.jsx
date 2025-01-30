"use client"

import { useState } from "react";
import ModalComponent from "../../app/modal/modal-component";

export default function StartButton() {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
  <div>
    <button
        onMouseEnter={() => setHovered(true)} // 마우스가 올라갔을 때
        onMouseLeave={() => setHovered(false)} // 마우스가 벗어났을 때
        onClick={() => setShowModal(true)} // 버튼 클릭 시 모달 표시
        className={`mt-24 px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
            hovered
                ? "bg-[#5AA0A1] text-white ring-4 ring-[#A1D5D6]"
                : "bg-[#6DB1B2] text-white"
        }`}
    >
      무료 구독 시작하기
    </button>
    {showModal && (
        <ModalComponent onClose={() => setShowModal(false)} />
    )}
  </div>
  );
}