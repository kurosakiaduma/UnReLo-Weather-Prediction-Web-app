import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { FiPlus } from "react-icons/fi";

export default function App() {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.forEach((ref, index) => {
      ref.style.maxHeight =
        activeIndex === index ? `${ref.scrollHeight}px` : "0px";
    });
  }, [contentRefs, activeIndex]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "How do I sign up for an account?",
      answer:
        "You can use the register here link to create, you can click the link to ",
    },
    {
      question: " How do I log in to my dashboard?",
      answer:
        "The default page is the login page, so the user can be able to login through it",
    },
    {
      question: "What type of sensors are supported by the dashboard?",
      answer: "",
    },
    {
      question:
        "What does each line chart represents on the sensor statistics page?",
      answer: "",
    },
    {
      question: "Is there a mobile app available for the dashboard",
      answer:
        "There is a flutter rendition of the same website, that is developed and will be deployed",
    },
    {
      question: "",
      answer: "",
    },
    //Add more question-answer pairs here
  ];

  return (
    <>
      <div className="App">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                  Why do you like web developemnt
                </h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>Because I love coding</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
