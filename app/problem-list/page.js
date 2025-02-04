"use client";

import { useState, useEffect } from "react";
import SearchBar from "../../components/problem-list/searchBar";
import FilterBar from "../../components/problem-list/filterBar";
import ProblemList from "../../components/problem-list/problemList";
import Title from "../../components/landing/Title";
import { Bell, Settings, Loader } from "lucide-react";

const ProblemListPage = () => {
  const [problems, setProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ category: "", level: "" });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch("/api/problems");
        if (!response.ok) {
          throw new Error("Failed to fetch problems");
        }
        const data = await response.json();
        setProblems(data.data.problems);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProblems();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
    setSearchTerm("");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader className="animate-spin h-5 w-5 text-[#6DB1B2]" />
          <span className="text-gray-600">문제를 불러오는 중...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500">오류가 발생했습니다: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#6DB1B2] text-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">문제 리스트</h1>
            <div className="flex gap-4">
              <Bell className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
              <Settings className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <SearchBar onSearch={handleSearch} />
          <FilterBar
            onFilterChange={handleFilterChange}
            activeFilters={filters}
          />
          <div className="mb-4">
            {(filters.category || filters.level || searchTerm) && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>현재 필터:</span>
                {searchTerm && (
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    검색어: {searchTerm}
                  </span>
                )}
                {filters.category && (
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    카테고리: {filters.category}
                  </span>
                )}
                {filters.level && (
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    레벨: {filters.level}
                  </span>
                )}
              </div>
            )}
          </div>
          <ProblemList
            problems={problems}
            filters={filters}
            searchTerm={searchTerm}
          />
        </div>
      </main>
    </div>
  );
};

export default ProblemListPage;
