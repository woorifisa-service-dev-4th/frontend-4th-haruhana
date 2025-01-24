"use client";

import QuestionSidebar from "@/components/problems/QuestionSideBar";
import QuestionArea from "@/components/problems/QuestionArea";
import QuestionHeader from "@/components/problems/QuestionHeader";
import { QuestionProvider } from "@/contexts/QuestionContext";
import SelectMissModal from "@/ui/SelectMissModal";
import "../globals.css";

export default function QuestionPage() {
  return (
    <QuestionProvider>
      <QuestionHeader />
      <div className="flex h-screen bg-gray-100">
        <QuestionSidebar />
        <div className="flex-1 flex flex-col items-center mt-12">
          <QuestionArea questionIndex={0} />
        </div>
      </div>
      <SelectMissModal />
    </QuestionProvider>
  );
}
