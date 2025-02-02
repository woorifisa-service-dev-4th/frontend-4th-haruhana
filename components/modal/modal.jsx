"use client";

import React, { useEffect } from "react";
import ModalComponent from "@/components/modal/modal-component";

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                onClose(); // ESC 키를 누르면 모달 닫기
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null; // 모달이 닫혀있으면 렌더링 안 함

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            {/* ✅ 모달 크기 자동 조절 + 스크롤 가능하도록 수정 */}
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[80vh] overflow-y-auto px-6 py-6 relative flex flex-col">
                {/* ✅ 닫기 버튼 위치 조정 */}
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"

                >
                    ✖
                </button>

                <div className="w-full"><ModalComponent/></div>
            </div>
        </div>
    );
};

export default Modal;
