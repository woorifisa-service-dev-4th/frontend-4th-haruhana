"use client";

import React from "react";

const QuestionInput = ({ value, onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="question-count" className="block font-medium mb-2">
                문제 수
            </label>
            <input
                type="number"
                id="question-count"
                min="1"
                max="5"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md p-2"
            />
            <small className="text-gray-500">1-5개 사이로 선택해주세요</small>
        </div>
    );
};

export default QuestionInput;
