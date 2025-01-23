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
        <div className="mb-4">
            <label htmlFor="time" className="block font-medium mb-2">
                학습 시간
            </label>
            <select
                id="time"
                ref={selectRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
            >
                <option value="" disabled>
                    학습 알림 시간을 선택하세요
                </option>
                <option value="7">7시</option>
                <option value="8시">8시</option>
            </select>
        </div>
    );
};

export default TimeSelector;
