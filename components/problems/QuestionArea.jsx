const QuestionArea = () => {
  return (
    <div className="w-4/5 max-w-6xl bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold mb-4">문제 제목</h1>
      <p className="text-gray-600 mb-6">
        다음 중 옳은 것을 고르시오.
      </p>

      {/* Options */}
      <div className="flex flex-col gap-4">
        {["A. 선택지 1", "B. 선택지 2", "C. 선택지 3", "D. 선택지 4"].map(
          (option, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              {option}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default QuestionArea;
