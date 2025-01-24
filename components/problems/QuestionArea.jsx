import { useState } from "react";
import { useQuestionContext } from "@/contexts/QuestionContext";

const QuestionArea = ({ questionIndex }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { handleSubmit } = useQuestionContext();

  const toggleOption = (option) => {
    // 이미 선택된 옵션을 다시 클릭하면 선택을 취소
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  const submit = () => {
    const isCorrect = selectedOption === "A. 선택지 1";
    handleSubmit(selectedOption !== null, isCorrect, questionIndex);
  };

  return (
    <div className="w-4/5 max-w-6xl bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold mb-4">문제 {questionIndex + 1}</h1>
      <p className="text-gray-600 mb-6">다음 중 옳은 것을 고르시오.</p>
      <div className="flex flex-col gap-4">
        {["A. 선택지 1", "B. 선택지 2", "C. 선택지 3", "D. 선택지 4"].map(
          (option, index) => (
            <button
              key={index}
              onClick={() => toggleOption(option)}
              className={`w-full text-left px-4 py-3 border rounded-lg transition ${
                selectedOption === option
                  ? "bg-[#6DB1B2] text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {option}
            </button>
          )
        )}
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={submit}
          className="px-6 py-3 bg-[#6DB1B2] text-white rounded-md shadow-md hover:bg-[#5AA0A1] transition"
        >
          제출
        </button>
      </div>
    </div>
  );
};

export default QuestionArea;
