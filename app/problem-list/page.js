"use client";

import React, { useState } from "react";
import SearchBar from "../../components/problem-list/searchBar";
import FilterBar from "../../components/problem-list/filterBar";
import ProblemList from "../../components/problem-list/problemList";
import Title from "../../components/landing/Title";
import { Bell, Settings } from "lucide-react";

const ProblemListPage = () => {
  // 초기 더미 데이터
  const initialProblems = [
    { id: 1, name: "REST API와 SOAP API", category: "fa-server", level: "0" },
    { id: 2, name: "HTML5 시맨틱 태그", category: "fa-code", level: "1" },
    {
      id: 3,
      name: "TCP 3-way handshake",
      category: "fa-network-wired",
      level: "2",
    },
    { id: 4, name: "SQL DDL", category: "fa-database", level: "3" },
    { id: 5, name: "교착상태", category: "fa-os", level: "0" },
    { id: 6, name: "스택", category: "fa-cubes", level: "1" },
    {
      id: 7,
      name: "스프링 부트 @Autowired 어노테이션",
      category: "fa-server",
      level: "2",
    },
    { id: 8, name: "JavaScript 비동기 처리", category: "fa-code", level: "3" },
    {
      id: 9,
      name: "IP주소 MAC 주소 변환 프로트콜",
      category: "fa-network-wired",
      level: "0",
    },
    {
      id: 10,
      name: "트랜잭션의 ADID 속성",
      category: "fa-database",
      level: "1",
    },
    { id: 11, name: "가상 메모리 관리 기법", category: "fa-os", level: "2" },
    {
      id: 12,
      name: "자가 균형 이진 탐색 트리",
      category: "fa-cubes",
      level: "3",
    },
    {
      id: 13,
      name: "백엔드 시스템에서 캐싱의 주된 목적",
      category: "fa-server",
      level: "0",
    },
    { id: 14, name: "React", category: "fa-code", level: "1" },
    {
      id: 15,
      name: "비연결형 프로트콜",
      category: "fa-network-wired",
      level: "2",
    },
    {
      id: 16,
      name: "데이터베이스 인텍스 자료구조",
      category: "fa-database",
      level: "3",
    },
    { id: 17, name: "동기화", category: "fa-os", level: "0" },
    { id: 18, name: "배열", category: "fa-cubes", level: "1" },
    {
      id: 19,
      name: "스프링 부트의 자동 구성(Auto-configuration) 기능",
      category: "fa-server",
      level: "2",
    },
    { id: 20, name: "웹 애플리케이션의 성능", category: "fa-code", level: "3" },
    {
      id: 21,
      name: "DDos 공격 특징",
      category: "fa-network-wired",
      level: "0",
    },
    {
      id: 22,
      name: "데이터 검색 속도 자료구조",
      category: "fa-database",
      level: "1",
    },
    { id: 23, name: "페이지 교체 알고리즘", category: "fa-os", level: "2" },
    { id: 24, name: "해시 테이블", category: "fa-cubes", level: "3" },
    {
      id: 25,
      name: "SQL Injection 공격을 방지하는 방법",
      category: "fa-server",
      level: "0",
    },
    {
      id: 26,
      name: "반응형 웹 디자인을 구현 CSS",
      category: "fa-code",
      level: "1",
    },
    {
      id: 27,
      name: "TLS/SSL 프로토콜ㄴ",
      category: "fa-network-wired",
      level: "2",
    },
    { id: 28, name: "제 1정규형의 조건", category: "fa-database", level: "3" },
    { id: 29, name: "세마포어와 뮤텍스", category: "fa-os", level: "0" },
    {
      id: 30,
      name: "Array, ArrayList, LinkedList",
      category: "fa-cubes",
      level: "1",
    },
  ];

  const [problems, setProblems] = useState(initialProblems);
  const [filters, setFilters] = useState({ category: "", level: "" });

  const handleSearch = (searchTerm) => {
    // 검색 로직은 추후 구현
    console.log("Searching for:", searchTerm, "with filters", filters);
    // 검색어에 따른 필터링 로직은 아직 구현하지 않고 초기 데이터로 사용
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

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
        <SearchBar onSearch={() => {}} />
        <FilterBar onFilterChange={handleFilterChange} />
        <ProblemList problems={initialProblems} filters={filters} />
        {/* 필터링된 문제 전달 */}
      </div>
    </div>
  );
};

export default ProblemListPage;
