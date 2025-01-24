"use client"

import React, { useState, useEffect } from "react";
import CategorySelector from "./category-selector";
import TimeSelector from "./time-selector";
import QuestionInput from "./question-input";

const Page = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [time, setTime] = useState("");
    const [questionCount, setQuestionCount] = useState("");


    const handleCategorySelect = (category) => {
        if (!selectedCategories.some((c) => c.id === category.id)) {
            setSelectedCategories((prev) => [...prev, category]);
        }
    };

    const handleCategoryDeselect = (category) => {
        setSelectedCategories((prev) => prev.filter((c) => c.id !== category.id));
    };



    const handleSubmit = async () => {
        const formData = {
            categories: selectedCategories.map((c) => c.id),
            time,
            questionCount: parseInt(questionCount, 10),
        };

        console.log("Form Data:", formData);

        try {
            const response = await fetch("/api/dummyData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Server Response:", result);
            } else {
                console.error("Failed to send data:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <div className="flex pt-20">
            <div className="bg-white rounded-lg shadow-lg p-7 m-auto w-[450px]">
                <h1 className="text-2xl font-bold mb-6">학습 설정</h1>
                <CategorySelector
                    selectedCategories={selectedCategories}
                    onSelect={handleCategorySelect}
                    onDeselect={handleCategoryDeselect}
                />
                <TimeSelector value={time} onChange={setTime} />
                <QuestionInput value={questionCount} onChange={setQuestionCount} />
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