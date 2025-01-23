"use client";

import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "selectric";

const CategorySelector = ({ value, onChange }) => {
    const selectRef = useRef(null);

    useEffect(() => {
        if (selectRef.current) {
            $(selectRef.current).select({
                onChange: (element) => {
                    const selectedValue = $(element).val();
                    onChange(selectedValue);
                },
            });
        }

        return () => {
            if (selectRef.current) {
                $(selectRef.current).select("destroy");
            }
        };
    }, []);

    return (
        <div className="mb-4">
            <label htmlFor="category" className="block font-medium mb-2">
                학습 카테고리
            </label>
            <select
                id="category"
                ref={selectRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
            >
                <option value="" disabled>
                    카테고리를 선택하세요!
                </option>
                <option value="1">백엔드</option>
                <option value="2">프론트엔드</option>
                <option value="3">네트워크</option>
                <option value="4">데이터베이스</option>
                <option value="5">운영체제</option>
                <option value="6">자료구조</option>


            </select>
        </div>
    );
};

export default CategorySelector;
