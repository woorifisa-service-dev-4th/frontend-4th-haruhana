'use client';

import React, {useState} from "react";
import dynamic from 'next/dynamic';

const CategorySelector = dynamic(() => import('./category-selector'), {ssr: false});
const TimeSelector = dynamic(() => import('./time-selector'), {ssr: false});
const QuestionInput = dynamic(() => import('./question-input'), {ssr: false});

export default function ModalDetail({ onClose, hovered }) {
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
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6">학습 설정</h1>
            <CategorySelector
                selectedCategories={selectedCategories}
                onSelect={handleCategorySelect}
                onDeselect={handleCategoryDeselect}
            />
            <TimeSelector value={time} onChange={setTime}/>
            <QuestionInput value={questionCount} onChange={setQuestionCount}/>
            <div className="flex justify-center">
                <button
                    className={`mt-10 px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
                        hovered
                            ? "bg-[#5AA0A1] text-white ring-4 ring-[#A1D5D6]"
                            : "bg-[#6DB1B2] text-white"
                    }`}
                    onClick={handleSubmit}
                >
                    설정 완료
                </button>
            </div>
        </div>
    );
}

