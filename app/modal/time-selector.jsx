"use client";

import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "selectric";

const TimeSelector = ({ value, onChange }) => {
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
        <div className="mb-5">
            <label htmlFor="time" className="block text-lg font-bold p-2 text-left">
                학습 시간
            </label>
            <div className="text-left">
            <select
                id="time"
                ref={selectRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-70 border border-gray-300 rounded-md p-2 ml-2"
            >
                <option value="" disabled>
                    학습 알림 시간을 선택하세요
                </option>
                <option value="7">오전 7시</option>
                <option value="8">오전 8시</option>
                <option value="9">오전 9시</option>
            </select>
            </div>
        </div>
    );
};

export default TimeSelector;
