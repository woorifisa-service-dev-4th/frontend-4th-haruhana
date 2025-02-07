import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProblemList = ({ problems, filters, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 8;

  // 필터링 로직 개선
  const filteredProblems = problems.filter((problem) => {
    // 검색어 필터링
    const searchMatch = searchTerm
      ? problem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        problem.category.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    // 카테고리 필터링
    const categoryMatch =
      !filters.category || problem.category === filters.category;

    // 레벨 필터링
    const levelMatch =
      !filters.level || problem.level.toString() === filters.level;

    return searchMatch && categoryMatch && levelMatch;
  });

  // 페이지가 변경될 때 첫 페이지로 리셋
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchTerm]);

  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(
    indexOfFirstProblem,
    indexOfLastProblem
  );
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);

  return (
    <div className="space-y-6">
      {filteredProblems.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          검색 결과가 없습니다.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentProblems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-[#6DB1B2] transition-all duration-200 p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-800">{problem.name}</h3>
                  <span className="px-2 py-1 text-sm rounded-full bg-[#6DB1B2] bg-opacity-10 text-[#6DB1B2]">
                    Lv.{problem.level}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">
                    {problem.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`w-8 h-8 rounded-full ${
                      currentPage === number
                        ? "bg-[#6DB1B2] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProblemList;
