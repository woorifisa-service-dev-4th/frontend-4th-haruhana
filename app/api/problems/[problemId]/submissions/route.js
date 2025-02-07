// TODO: 추후 수정 필요
import { NextResponse } from "next/server";

const dummyQuestions = [
  {
    id: 1,
    question: "다음 중 JavaScript의 데이터 타입이 아닌 것은?",
    answer: "C",
  },
  {
    id: 2,
    question: "React의 생명주기 메서드가 아닌 것은?",
    answer: "C",
  },
];

export async function POST(request, { params }) {
  try {
    const { problemId } = params;
    const { answer } = await request.json();

    // Validate inputs
    if (!problemId || !answer) {
      return NextResponse.json(
        { message: "Problem ID and answer are required" },
        { status: 400 }
      );
    }

    // Find the question
    const question = dummyQuestions.find((q) => q.id === parseInt(problemId));
    if (!question) {
      return NextResponse.json(
        { message: "Problem not found" },
        { status: 404 }
      );
    }

    // Check the answer
    const isCorrect = question.answer === answer;

    // Return result
    return NextResponse.json({
      message: isCorrect ? "정답입니다!" : "오답입니다.",
      result: {
        problemId,
        isCorrect,
        submittedAnswer: answer,
        correctAnswer: isCorrect ? answer : null, // Only show correct answer if they got it right
      },
    });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
