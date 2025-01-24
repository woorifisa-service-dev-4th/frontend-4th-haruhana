import React, { useEffect } from 'react';

const QuestionInput = ({ value, onChange }) => {
    useEffect(() => {
        if (!value) {
            onChange(""); // 빈 문자열을 전달하여 '학습 문제 수를 선택하세요' 옵션이 선택되게 함
        }
    }, [value, onChange]); // value 또는 onChange 함수가 변경될 때마다 이 effect를 재실행

    return (
        <div className="mb-10">
            <label htmlFor="question-count" className="block text-lg font-bold p-2">
                문제 수
            </label>
            <select
                id="question-count"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-70 border border-gray-300 rounded-md p-2 ml-2"
            >
                <option value="" disabled>학습 문제 수를 선택하세요</option>
                <option value="1">1개</option>
                <option value="2">2개</option>
                <option value="3">3개</option>
                <option value="4">4개</option>
                <option value="5">5개</option>
            </select>
        </div>
    );
};

export default QuestionInput;
