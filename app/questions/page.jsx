"use client";

import QuestionSidebar from "@/components/problems/QuestionSideBar";
import QuestionArea from "@/components/problems/QuestionArea";
import QuestionHeader from "@/components/problems/QuestionHeader";
import { QuestionProvider } from "@/contexts/QuestionContext";
import "../globals.css";

export default function QuestionPage() {
  return (
    <QuestionProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#e6f7f7] via-white to-[#e6f7f7]">
        <QuestionHeader />
        <div className="flex p-6 gap-6">
          <QuestionSidebar />
          <div className="flex-1 flex flex-col items-center">
            <QuestionArea />
          </div>
        </div>
      </div>
    </QuestionProvider>
  );
}
