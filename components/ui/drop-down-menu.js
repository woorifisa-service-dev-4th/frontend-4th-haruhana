import React, { useState, useRef, useEffect } from "react";

const DropDownMenu = ({ value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (val, index) => {
    onChange(val);
    setIsOpen(false);
    setHighlightedIndex(index);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelectOption(options[highlightedIndex].value, highlightedIndex);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full mb-5" ref={dropdownRef}>
      <label className="block text-lg font-bold p-2" id="dropdown-label">
        {placeholder}
      </label>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby="dropdown-label"
          className={`
            appearance-none w-full border border-gray-300 rounded-md p-3 pr-8 
            bg-white text-left flex items-center justify-between
            transition-all duration-200 ease-in-out
            hover:border-[#6DB1B2] focus:outline-none focus:ring-2 
            focus:ring-[#6DB1B2] focus:border-transparent
            ${isOpen ? "ring-2 ring-[#6DB1B2] border-transparent" : ""}
          `}
        >
          {value ? `${value}` : placeholder}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`fill-current text-[#6DB1B2] transform transition-transform duration-200 absolute right-2
              ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 z-10
              shadow-lg transform transition-all duration-200 ease-in-out"
            role="listbox"
          >
            {options.map((option, index) => (
              <div
                key={option.value}
                onClick={() => handleSelectOption(option.value, index)}
                onMouseEnter={() => setHighlightedIndex(index)}
                role="option"
                aria-selected={value === option.value}
                className={`
                  p-2 cursor-pointer transition-colors duration-150
                  ${
                    highlightedIndex === index
                      ? "bg-[#6DB1B2] text-white"
                      : "hover:bg-gray-100"
                  }
                `}
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

export default DropDownMenu;
