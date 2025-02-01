'use client';

import React, { useState } from "react";
import dynamic from 'next/dynamic';
import Dropdown from './drop-down';


const CategorySelector = dynamic(() => import('./category-selector'), { ssr: false });
const TimeSelector = dynamic(() => import('./time-selector'), { ssr: false });
const QuestionInput = dynamic(() => import('./question-input'), { ssr: false });

export default function ModalComponent() {
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

    const handleCardClick = (path) => {
        console.log(`Navigating to ${path}`);
        window.location.href = path;
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
                handleCardClick('/mypage');
            }else {
                console.error("Failed to send data:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };
    const TimeSelector = ({ value, onChange }) => {
        const options = [
            { value: '7시', label: '오전 7시' },
            { value: '8시', label: '오전 8시' },
            { value: '9시', label: '오전 9시' }
        ];
        return <Dropdown value={value} onChange={onChange} options={options} placeholder="학습 시간"/>;
    };
    const QuestionInput = ({ value, onChange }) => {
        const options = [
            { value: '1개', label: '1개' },
            { value: '2개', label: '2개' },
            { value: '3개', label: '3개' },
            { value: '4개', label: '4개' },
            { value: '5개', label: '5개' }
        ];
        return <Dropdown value={value} onChange={onChange} options={options} placeholder="문제 수"/>;
    };




    return (
        <div className="bg-white rounded-lg shadow-lg p-7  mt-20 m-auto  w-[450px]">
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
                    className="bg-[#6DB1B2] text-white px-4 py-2 rounded-md hover:bg-[#6DB1B2] w-60 mt-1"
                    onClick={handleSubmit}
                >
                    설정 완료
                </button>
            </div>
        </div>
    );
}