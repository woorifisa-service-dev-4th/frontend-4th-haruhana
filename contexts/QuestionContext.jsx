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

    setQuestionStatus((prev) =>
      prev.map((status, index) =>
        index === questionIndex ? (isAnswered ? "selected" : status) : status
      )
    );
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
