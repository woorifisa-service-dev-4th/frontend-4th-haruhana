const QuestionHeader = () => {
    return (
      <header className="flex items-center justify-between px-6 py-4 bg-[#E0F4F4] shadow-md">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-[#6DB1B2]">
          Haruhana
        </div>
  
        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#6DB1B2] text-white rounded-md shadow hover:bg-[#5AA0A1] transition">
            전체 목록 조회
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition">
            나가기
          </button>
        </div>
      </header>
    );
  };
  
  export default QuestionHeader;
  