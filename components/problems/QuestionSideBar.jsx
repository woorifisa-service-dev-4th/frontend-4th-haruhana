import { useQuestionContext } from "@/contexts/QuestionContext";

const QuestionSidebar = () => {

  const { questionStatus } = useQuestionContext();

  return (
    <div style={{ width: "100px", backgroundColor: "#E0F4F4" }} className="p-4 flex flex-col items-center gap-10">

      {questionStatus.map((status, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 w-full"
        >
          <button
            className="w-full h-12 bg-gradient-to-b from-[#9CD6D7] to-[#6DB1B2] rounded-full shadow-md flex items-center justify-center text-white font-medium hover:opacity-90 transition"
          >
            {index + 1}
          </button>

          <span className="text-sm font-medium text-gray-400">
            {(status === "selected") ? "☑️" : "-"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuestionSidebar;
