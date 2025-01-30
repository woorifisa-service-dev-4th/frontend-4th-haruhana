import React from "react";
import ModalDetail from './modal-detail';

export default function ModalComponent({ onClose, hovered }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto p-6 space-y-4 relative z-50">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out text-[#5AA0A1]"
                >
                    X
                </button>
                <ModalDetail />
            </div>
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
        </div>
    );
}
