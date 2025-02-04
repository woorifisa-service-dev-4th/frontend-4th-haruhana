import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="풀고 싶은 문제를 검색해보세요"
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#6DB1B2] focus:ring-2 focus:ring-[#6DB1B2] focus:ring-opacity-30 transition-all duration-200 outline-none"
        />
      </div>
    </form>
  );
};

export default SearchBar;
