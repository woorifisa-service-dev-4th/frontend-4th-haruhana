// TODO: 추후 수정 필요
export async function GET() {
  const questions = [
    {
      id: 1,
      question: "다음 중 JavaScript의 데이터 타입이 아닌 것은?",
      options: ["A. String", "B. Boolean", "C. Integer", "D. Symbol"],
      answer: "C",
      status: "unanswered",
    },
    {
      id: 2,
      question: "React의 생명주기 메서드가 아닌 것은?",
      options: [
        "A. componentDidMount",
        "B. componentWillUpdate",
        "C. renderComponent",
        "D. componentDidUpdate",
      ],
      answer: "C",
      status: "unanswered",
    },
  ];

  return new Response(JSON.stringify(questions), {
    headers: { "Content-Type": "application/json" },
  });
}
