import { useQuestionContext } from "@/contexts/QuestionContext";

const QuestionSidebar = () => {
  const { questions, currentQuestionIndex, setCurrentQuestionIndex } = useQuestionContext();
 
  return (
    <div className="w-[90px] p-4 flex flex-col items-center gap-8 bg-gradient-to-b from-[#E0F4F4] to-[#C5E8E8] shadow-lg">
      {questions.map((question, index) => (
        <div
          key={question.id}
          className="flex flex-col items-center gap-2.5 w-full"
        >
          <button
            onClick={() => setCurrentQuestionIndex(index)}
            className={`w-full h-11 mt-4 rounded-full shadow-md flex items-center justify-center text-white font-medium transition-all duration-200
              ${currentQuestionIndex === index 
                ? "bg-gradient-to-b from-[#9CD6D7] to-[#6DB1B2]" 
                : "bg-gradient-to-b from-gray-300 to-gray-400"
              }`}
          >
            {index + 1}
          </button>
          <span className="text-sm font-medium text-gray-500">
            {question.status === "!unanswered" ? "✓" : "-"}
          </span>
        </div>
      ))}
    </div>
  );
 };

export default QuestionSidebar;
