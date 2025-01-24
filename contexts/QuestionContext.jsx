"use client";

import { createContext, useContext, useState } from "react";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questionStatus, setQuestionStatus] = useState([null, null, null, null, null]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (answered, isCorrect, questionIndex) => {
    if (!answered) {
      setShowModal(true);
      return;
    }

    setQuestionStatus((prev) =>
      prev.map((status, index) =>
        index === questionIndex ? '☑️' : status
      )
    );
  };

  const closeModal = () => setShowModal(false);

  return (
    <QuestionContext.Provider
      value={{ questionStatus, showModal, handleSubmit, closeModal }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
