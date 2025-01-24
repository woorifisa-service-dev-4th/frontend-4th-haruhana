import { useQuestionContext } from "@/contexts/QuestionContext";

const QuestionSidebar = () => {
 const { questionStatus } = useQuestionContext();

 return (
   <div style={{ width: "100px" }} 
     className="p-4 flex flex-col items-center gap-8 bg-gradient-to-b from-[#E0F4F4] to-[#C5E8E8] shadow-lg">
     {questionStatus.map((status, index) => (
       <div
         key={index}
         className="flex flex-col items-center gap-2.5 w-full"
       >
         <button
           className="w-full h-11 bg-gradient-to-b from-[#9CD6D7] to-[#6DB1B2] rounded-full shadow-md flex items-center justify-center text-white font-medium hover:from-[#8EC8C9] hover:to-[#5EA3A4] active:shadow-inner transition-all duration-200"
         >
           {index + 1}
         </button>
         <span className="text-sm font-medium text-gray-500">
           {status === "selected" ? "☑️" : "-"}
         </span>
       </div>
     ))}
   </div>
 );
};

export default QuestionSidebar;
