"use client";

import React, { useState, useEffect } from "react";
import SearchBar from "../../components/problem-list/searchBar";
import FilterBar from "../../components/problem-list/filterBar";
import ProblemList from "../../components/problem-list/problemList";
import Title from "../../components/landing/Title";
import { Bell, Settings } from "lucide-react";

const ProblemListPage = () => {
  const [problems, setProblems] = useState([]);
  const [filters, setFilters] = useState({ category: "", level: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleSearch = (searchTerm) => {
    // TODO: Implement search functionality
    console.log("Searching for:", searchTerm, "with filters", filters);
  };

  const handleFilterChange = (filterType, value) => {
    // TODO: 서버에 필터링된 문제 요청
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#6DB1B2] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">문제 리스트</h1>
            <div className="flex gap-4">
              <Bell className="w-6 h-6 cursor-pointer hover:opacity-80" />
              <Settings className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </header>
      <Title />
      <div className="p-5 max-w-4xl mx-auto text-center">
        <SearchBar onSearch={handleSearch} />
        <FilterBar onFilterChange={handleFilterChange} />
        <ProblemList problems={problems} filters={filters} />
        {/* 필터링된 문제 전달 */}
      </div>
    </div>
  );
};

export default ProblemListPage;
