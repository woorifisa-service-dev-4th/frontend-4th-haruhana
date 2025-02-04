import React from "react";
import { Filter } from "lucide-react";

const FilterBar = ({ onFilterChange, activeFilters }) => {
  const categories = [
    "백엔드",
    "프론트엔드",
    "네트워크",
    "데이터베이스",
    "운영체제",
    "자료구조",
  ];
  const levels = ["0", "1", "2", "3"];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-4">
        <Filter className="h-5 w-5 text-[#6DB1B2]" />
        <h3 className="font-medium text-gray-700">필터</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        <select
          value={activeFilters?.category || ""}
          onChange={(e) => onFilterChange("category", e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:border-[#6DB1B2] focus:ring-2 focus:ring-[#6DB1B2] focus:ring-opacity-30 transition-all duration-200 outline-none"
        >
          <option value="">전체 카테고리</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={activeFilters?.level || ""}
          onChange={(e) => onFilterChange("level", e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:border-[#6DB1B2] focus:ring-2 focus:ring-[#6DB1B2] focus:ring-opacity-30 transition-all duration-200 outline-none"
        >
          <option value="">전체 레벨</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              Level {level}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
