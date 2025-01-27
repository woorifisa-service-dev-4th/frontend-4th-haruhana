import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="풀고 싶은 문제 제목, 기술문제 검색"
                className="p-2 border border-gray-300 rounded flex-grow mr-5 accent-yellow-300 w-full"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-[#6DB1B2] text-white rounded transition duration-300 hover:bg-white hover:text-black hover:border-[#6DB1B2] border-2 border-transparent"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
