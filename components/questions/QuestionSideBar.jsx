const QuestionSidebar = ({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) => {
  return (
    <div className="w-24 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center gap-4">
      {questions.map((question, index) => (
        <div key={question.id} className="w-full">
          <button
            onClick={() => setCurrentQuestionIndex(index)}
            className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-200 ${
              currentQuestionIndex === index
                ? "bg-[#6DB1B2] text-white shadow-lg"
                : "bg-gray-50 text-gray-600 hover:bg-[#6DB1B2]/10"
            }`}
          >
            <span className="text-lg font-semibold">{index + 1}</span>
            <span className="text-xs">
              {question.status === "unanswered" ? "•" : "✓"}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestionSidebar;
