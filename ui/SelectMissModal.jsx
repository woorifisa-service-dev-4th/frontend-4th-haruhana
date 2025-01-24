import { useQuestionContext } from "@/contexts/QuestionContext";

const SelectMissModal = () => {
  const { selectedMissModal, closeSelectedMissModal } = useQuestionContext();

  if (!selectedMissModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg text-gray-800">문제를 풀고 제출해주세요!</p>
        <button
          onClick={closeSelectedMissModal}
          className="mt-4 px-4 py-2 bg-[#6DB1B2] text-white rounded-md hover:bg-[#5AA0A1] transition"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default SelectMissModal;
