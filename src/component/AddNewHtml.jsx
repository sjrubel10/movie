import React, { useState } from "react";

function AddNewHtml() {

    const [questions, setQuestions] = useState([
        {
          question: "What is the capital of France?",
          options: ["Paris", "Berlin", "Rome", "Madrid"],
          answer: "Paris",
        },
        {
          question: "What is the currency of Japan?",
          options: ["Dollar", "Euro", "Yen", "Pound"],
          answer: "Yen",
        },
        {
          question: "Who wrote the Harry Potter series?",
          options: ["J.K. Rowling", "Stephenie Meyer", "Suzanne Collins", "Veronica Roth"],
          answer: "J.K. Rowling",
        },
      ]);
    
      const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(""));
    
      const handleOptionChange = (index, value) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = value;
        setSelectedOptions(newSelectedOptions);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
          if (selectedOptions[i] === questions[i].answer) {
            score++;
          }
        }
        alert(`Your score is ${score}/${questions.length}`);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          {questions.map((q, index) => (
            <div key={index}>
              <h3>{q.question}</h3>
              {q.options.map((o, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    id={`question-${index}-option-${i}`}
                    name={`question-${index}`}
                    value={o}
                    checked={selectedOptions[index] === o}
                    onChange={() => handleOptionChange(index, o)}
                  />
                  <label htmlFor={`question-${index}-option-${i}`}>{o}</label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      );
    }

export default AddNewHtml;
