import React, { useState } from 'react';

// Dropdown 컴포넌트 정의
const Dropdown = ({ value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelectOption = (val) => {
        onChange(val);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full mb-5">
            <label className="block text-lg font-bold p-2">
                {placeholder}
            </label>
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="appearance-none w-full border border-gray-300 rounded-md p-3 pr-10 bg-white text-left flex items-center justify-between focus:outline-none"
                >
                    {value ? `${value}` : placeholder}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         viewBox="0 0 20 20"
                         className="fill-current text-[#6DB1B2] transform transition-transform"
                         style={{marginRight: -2}}>
                        <path fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"/>
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 z-10">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => handleSelectOption(option.value)}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

    );
};

export default Dropdown;
