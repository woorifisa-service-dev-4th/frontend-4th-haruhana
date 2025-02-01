"use client";

import { createContext, useContext, useState } from "react";

// 더미 데이터 정의
const dummyQuestions = [
  {
    id: 1,
    question: "다음 중 JavaScript의 데이터 타입이 아닌 것은?",
    options: [
      "A. String",
      "B. Boolean", 
      "C. Integer",
      "D. Symbol"
    ],
    answer: "C",
    status: "unanswered"
  },
  {
    id: 2,
    question: "React의 생명주기 메서드가 아닌 것은?",
    options: [
      "A. componentDidMount",
      "B. componentWillUpdate",
      "C. renderComponent",
      "D. componentDidUpdate"
    ],
    answer: "C",
    status: "unanswered"
  }
 ];

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState(dummyQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // const handleSubmit = (questionId, selectedAnswer) => {
  //   setQuestions(prev => prev.map(q => {
  //     if (q.id === questionId) {
  //       return {
  //         ...q,
  //         status: q.answer === selectedAnswer ? "correct" : "incorrect"
  //       };
  //     }
  //     return q;
  //   }));
  // };

  return (
    <QuestionContext.Provider
      value={{ 
       questions,
       currentQuestionIndex,
       setCurrentQuestionIndex,
      //  handleSubmit
     }}>
     {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
