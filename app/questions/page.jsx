import QuestionSidebar from "@/components/problems/QuestionSideBar";
import QuestionArea from "@/components/problems/QuestionArea";
import QuestionHeader from "@/components/problems/QuestionHeader";
import "../globals.css";

export default function QuestionPage() {
  return (
    <html lang="en">
      <body>
        <QuestionHeader />

        <div className="flex h-screen bg-gray-100">
          <QuestionSidebar />

          <div className="flex-1 flex flex-col items-center mt-12">
            <QuestionArea />
          </div>
        </div>
      </body>
    </html>
  );
}
