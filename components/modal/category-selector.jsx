"use client";

import React, { useMemo } from "react";

const categories = [
    { id: 1, name: "백엔드", icon: "fas fa-server" },
    { id: 2, name: "프론트엔드", icon: "fas fa-code" },
    { id: 3, name: "네트워크", icon: "fas fa-network-wired" },
    { id: 4, name: "데이터베이스", icon: "fas fa-database" },
    { id: 5, name: "운영체제", icon: "fas fa-window-restore" },
    { id: 6, name: "자료구조", icon: "fas fa-cubes" },
];

const CategoryButtons = ({ availableCategories, onSelect }) => {
    return (
        <div className="flex flex-wrap gap-2 p-4">
            {availableCategories.map((category) => (
                <button
                    key={category.id}
                    className="px-4 py-2 rounded-full bg-gray-400 text-white font-medium"
                    onClick={() => onSelect(category)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

const SelectedCategories = ({ selectedCategories, onDeselect }) => {
    return (
        <div className="flex flex-wrap gap-2 p-4">
            {selectedCategories.length > 0 ? (
                selectedCategories.map((category) => (
                    <button
                        key={category.id}
                        className="px-4 py-2 rounded-full bg-[#6DB1B2] text-white font-medium"
                        onClick={() => onDeselect(category)}
                    >
                        {category.name}
                    </button>
                ))
            ) : (
                <p className="text-gray-500">선택된 카테고리가 없습니다.</p>
            )}
        </div>
    );
};

const CategorySelector = ({ selectedCategories = [], onSelect, onDeselect }) => {
    const availableCategories = useMemo(() => {
        return categories.filter(
            (category) => !selectedCategories.some((selected) => selected.id === category.id)
        );
    }, [selectedCategories]);

    return (
        <div>
            {/* ✅ 선택된 카테고리 표시 */}
            <div className="bg-white rounded-lg shadow p-4 mb-4 w-full max-w-[800px]">
                <h2 className="text-lg font-bold mb-3">선택된 카테고리</h2>
                <SelectedCategories
                    selectedCategories={selectedCategories}
                    onDeselect={onDeselect}
                />
            </div>

            {/* ✅ 선택 가능한 카테고리 표시 */}
            <div className="bg-white rounded-lg shadow p-4 w-full mb-4 max-w-[800px]">
                <h2 className="text-lg font-bold mb-3">카테고리 선택</h2>
                <CategoryButtons
                    availableCategories={availableCategories}
                    onSelect={onSelect}
                />
            </div>
        </div>
    );
};

export default CategorySelector;
