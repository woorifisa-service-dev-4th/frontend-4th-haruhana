"use client";

import React, { useState } from 'react';

const categories = [
    { name: '백엔드', icon: 'fas fa-server' },
    { name: '프론트엔드', icon: 'fas fa-code' },
    { name: '네트워크', icon: 'fas fa-network-wired' },
    { name: '데이터베이스', icon: 'fas fa-database' },
    { name: '운영체제', icon: 'fas fa-window-restore' },
    { name: '자료구조', icon: 'fas fa-cubes' },
];


const CategoryButtons = ({ availableCategories, onSelect }) => {
    return (
        <div className="flex flex-wrap gap-2 p-6">
            {availableCategories.map(category => (
                <button
                    key={category.name}
                    className="flex justify-center items-center  px-2 py-2 rounded-full bg-gray-400 text-white font-medium"
                    onClick={() => onSelect(category)}
                ><i className={`${category.icon}`}></i>
                    {category.name}
                </button>
            ))}
        </div>
    );
};


const SelectedCategories = ({ selectedCategories, onDeselect }) => {
    return (
        <div className="flex flex-wrap  gap-2 p-6 ">
            {selectedCategories.map((category, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-300 text-white font-medium shadow">
                    <span>{category.name}</span>
                    <button
                        onClick={() => onDeselect(category)}
                    >
                        <i className="fas fa-times-circle">X</i>
                    </button>
                </div>
            ))}
        </div>
    );
};

const Page = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSelectCategory = category => {
        setSelectedCategories([...selectedCategories, category]);
    };

    const handleDeselectCategory = category => {
        setSelectedCategories(selectedCategories.filter(item => item.name !== category.name));
    };

    const availableCategories = categories.filter(category => !selectedCategories.some(selected => selected.name === category.name));

    return (
        <div className="flex flex-col items-center bg-gray-100 p-3 mb-3 ">
            <div className="bg-white rounded-lg shadow p-4 mb-4 w-full max-w-[800px] ">
                <h1 className="text-lg font-bold mb-3">선택된 카테고리</h1>
                <SelectedCategories selectedCategories={selectedCategories} onDeselect={handleDeselectCategory}/>
            </div>
            <div className="bg-white rounded-lg shadow p-4 w-full mb-4 max-w-[800px]">
                <h1 className="text-lg font-bold mb-3">카테고리 선택</h1>
                <CategoryButtons availableCategories={availableCategories} onSelect={handleSelectCategory}/>
            </div>
        </div>
    );
};

export default Page;

