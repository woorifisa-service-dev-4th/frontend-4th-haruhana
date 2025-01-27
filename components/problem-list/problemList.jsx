import React from 'react';

const ProblemList = ({ problems, filters }) => {
    // 필터링 로직
    const filteredProblems = problems.filter(problem =>
        (filters.category ? problem.category === filters.category : true) &&
        (filters.level ? problem.level === filters.level : true)
    );

    return (
        <ul className="space-y-4">
            {filteredProblems.map((problem, index) => (
                <li
                    key={index}
                    className="p-4 bg-white rounded shadow border border-gray-200 hover:border-[#6DB1B2] transition-colors"
                >
                    {problem.name}
                </li>
            ))}
        </ul>
    );
};

export default ProblemList;
