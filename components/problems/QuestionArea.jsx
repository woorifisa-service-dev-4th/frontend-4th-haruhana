import { useState } from "react";
import { useQuestionContext } from "@/contexts/QuestionContext";

const QuestionArea = ({ questionIndex }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { handleSubmit } = useQuestionContext();

  const answer = (select) => {
    if (selectedAnswer === select) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(select);
    }
  };

  const submit = () => {
    const isCorrected = selectedAnswer === "A. 선택지 1";
    handleSubmit(selectedAnswer !== null, isCorrected, questionIndex);
  };

  return (
    <div className="w-[90%] bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold mb-4">문제 {questionIndex + 1}</h1>
      <p className="text-gray-600 mb-6">다음 중 옳은 것을 고르시오.</p>
      <div className="flex flex-col gap-4">
        {["A. 선택지 1", "B. 선택지 2", "C. 선택지 3", "D. 선택지 4"].map(
          (select, index) => (
            <button
              key={index}
              onClick={() => answer(select)}
              className={`w-full text-left px-4 py-3 border rounded-lg transition ${
                selectedAnswer === select
                  ? "bg-[#6DB1B2] text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {select}
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
