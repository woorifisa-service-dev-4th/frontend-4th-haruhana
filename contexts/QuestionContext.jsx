"use client";

import { createContext, useContext, useState } from "react";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questionStatus, setQuestionStatus] = useState([null, null, null, null, null]);
  const [selectedMissModal, setSelectedMissModal] = useState(false);

  const handleSubmit = (isAnswered, questionIndex) => {
    if (!isAnswered) {
      setSelectedMissModal(true);
      return;
    }

    // 현재 상태가 selected면 "-"로, 아니면 selected로 토글
    // setQuestionStatus((prev) =>
    //   prev.map((status, index) =>
    //     index === questionIndex ? 
    //     (status === "selected" ? "-" : "selected") : 
    //     (status === "selected" ? "-" : status)
    //   )
    // );
  };
  
  const closeSelectedMissModal = () => setSelectedMissModal(false);

  return (
    <QuestionContext.Provider
      value={{ questionStatus, selectedMissModal, handleSubmit, closeSelectedMissModal }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
