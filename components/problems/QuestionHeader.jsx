const QuestionHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#E0F4F4] to-[#D0EDED] shadow-xl border-b-2 border-[#6DB1B2]/30">
      <div className="text-3xl font-black bg-gradient-to-r from-[#6DB1B2] to-[#4A8E8F] bg-clip-text text-transparent">
        Haruhana
      </div>
 
      <div className="flex items-center gap-4">
        <button className="px-5 py-2.5 bg-gradient-to-r from-[#6DB1B2] to-[#5AA0A1] text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
          전체 목록 조회
        </button>
        <button className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 rounded-lg font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
          나가기
        </button>
      </div>
    </header>
  );
 };
 
 export default QuestionHeader;
