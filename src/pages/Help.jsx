import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDesc } from "@fortawesome/free-solid-svg-icons";

function Help() {
  const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What are components in React?",
      answer: "Components are reusable pieces of UI in React.",
    },
    {
      id: 3,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks similar to HTML.",
    },
    {
      id: 4,
      question: "What is state in React?",
      answer:
        "State is a built-in object for managing data that changes over time.",
    },
    {
      id: 5,
      question: "What is props in React?",
      answer:
        "Props are short for properties and allow data to be passed between components.",
    },
    {
      id: 6,
      question: "What is a React Hook?",
      answer:
        "Hooks are functions that let you use React state and lifecycle features.",
    },
    {
      id: 7,
      question: "What is the Virtual DOM?",
      answer:
        "The Virtual DOM is a lightweight copy of the real DOM used for efficient updates.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  return (
    <div className="p-4 flex flex-col items-center mt-5">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="singleQuestion flex flex-col p-2 w-5/6 secondary-bg dark:bg-gray-800 shadow-lg mb-4"
        >
          <div className="question flex justify-between items-center">
            <p className="font-semibold dark:text-gray-300">{faq.question}</p>
            <FontAwesomeIcon
              className="cursor-pointer dark:text-white"
              icon={faSortDesc}
              onClick={() =>
                setActiveId((prev) => (prev === faq.id ? null : faq.id))
              }
            />
          </div>
          {activeId === faq.id && (
            <div className="answer mt-2 border dark:border-gray-700 p-1 dark:text-gray-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Help;
