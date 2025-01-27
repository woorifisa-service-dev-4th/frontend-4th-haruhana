import React from 'react';

const FilterBar = ({ onFilterChange }) => {
    return (
        <div className="flex justify-start space-x-4 mb-4">
            <select
                onChange={(e) => onFilterChange('category', e.target.value)}
                className="p-2 border border-gray-300 rounded"
            >
                <option value="">카테고리 선택</option>
                <option value="fa-server">백엔드</option>
                <option value="fa-code">프론트엔드</option>
                <option value="fa-network-wired">네트워크</option>
                <option value="fa-database">데이터베이스</option>
                <option value="fa-os">운영체제</option>
                <option value="fa-cubes">자료구조</option>
            </select>
            <select
                onChange={(e) => onFilterChange('level', e.target.value)}
                className="p-2 border border-gray-300 rounded"
            >
                <option value="">레벨 선택</option>
                <option value="0">Lv. 0</option>
                <option value="1">Lv. 1</option>
                <option value="2">Lv. 2</option>
                <option value="3">Lv. 3</option>
            </select>
        </div>
    );
};

export default FilterBar;
