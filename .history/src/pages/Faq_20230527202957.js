import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { FiPlus } from "react-icons/fi";

export default function App() {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.forEach((ref, index) => {
        ref.style.maxHeight = activeIndex === index ? `${ref.scrollHeight}px` : "0px";
    });
  }, [contentRefs, activeIndex]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    };



    const faqs = [
        {
            question: "Why do you like web development?",
            answer: "Becas=use I love coding",
        },
        //Add more question-answer pairs here
    ]
  };
  
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
