"use client"

import React, { useState, useEffect } from "react";
import CategorySelector from "./category-selector";
import TimeSelector from "./time-selector";
import QuestionInput from "./question-input";

const Page = () => {
    const [dummyData, setDummyData] = useState([]);
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [questionCount, setQuestionCount] = useState(5);

    const fetchDummyData = async () => {
        try {
            const response = await fetch("/api/dummyData");
            if (response.ok) {
                const data = await response.json();
                setDummyData(data);
            } else {
                console.error("Failed to fetch dummy data");
            }
        } catch (error) {
            console.error("Error fetching dummy data:", error);
        }
    };

    const handleSubmit = async () => {
        const newData = {
            category,
            time: time.replace("시", ""),
            questionCount,
        };

        try {
            const response = await fetch("/api/dummyData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newData),
            });

            if (response.ok) {
                const result = await response.json();
                alert(`설정 완료:\n카테고리: ${category}\n시간: ${time}\n문제 수: ${questionCount}`);
                fetchDummyData();
            } else {
                const errorData = await response.json();
                alert(`데이터 저장에 실패했습니다.\n사유: ${errorData.message}`);
            }
        } catch (error) {
            console.error("데이터 저장 중 오류 발생:", error);
            alert("데이터 저장 중 오류가 발생했습니다.");
        }
    };

    useEffect(() => {
        fetchDummyData();
    }, []);

    return (
        <div className="flex pt-20">
            <div className="bg-white rounded-lg shadow-lg p-7 m-auto w-[450px]">
                <h1 className="text-2xl font-bold mb-6">학습 설정</h1>
                <CategorySelector value={category} onChange={setCategory}/>
                <TimeSelector value={time} onChange={setTime}/>
                <QuestionInput value={questionCount} onChange={setQuestionCount}/>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-60 mt-1"
                        onClick={handleSubmit}
                    >
                        설정 완료
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
