const QuestionHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-black bg-gradient-to-r from-[#6DB1B2] to-[#4A8E8F] bg-clip-text text-transparent">
            Haruhana
          </h1>
          <div className="text-sm font-medium text-gray-500">
            진행률: <span className="text-[#6DB1B2]">0%</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 bg-[#6DB1B2] text-white rounded-lg font-medium shadow-sm hover:bg-[#5AA0A1] transition-colors">
            전체 문제
          </button>
          <button className="px-6 py-2.5 bg-gray-50 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            나가기
          </button>
        </div>
      </div>
    </header>
  );
};

export default QuestionHeader;
