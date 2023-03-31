import React, { useState } from "react";

function CreateQuizForm() {
  const [quizData, setQuizData] = useState({
    title: "",
    questions: [
      {
        question: "",
        options: ["", "", "", ""],
        answerIndex: -1,
      },
    ],
  });

  const handleInputChange = (event, questionIndex, optionIndex) => {
    const newQuizData = { ...quizData };
    if (optionIndex === -1) {
      newQuizData[event.target.name] = event.target.value;
    } else {
      newQuizData.questions[questionIndex].options[optionIndex] =
        event.target.value;
    }
    setQuizData(newQuizData);

    console.log( newQuizData);
  };

  const handleQuestionAdd = () => {
    const newQuizData = { ...quizData };
    newQuizData.questions.push({
      question: "",
      options: ["", "", "", ""],
      answerIndex: -1,
    });
    setQuizData(newQuizData);

    console.log( newQuizData ) ;
  };

  const handleOptionAdd = (questionIndex) => {
    const newQuizData = { ...quizData };
    newQuizData.questions[questionIndex].options.push("");
    setQuizData(newQuizData);
  };

  const handleQuestionRemove = (questionIndex) => {
    const newQuizData = { ...quizData };
    newQuizData.questions.splice(questionIndex, 1);
    setQuizData(newQuizData);
  };

  const handleOptionRemove = (questionIndex, optionIndex) => {
    const newQuizData = { ...quizData };
    newQuizData.questions[questionIndex].options.splice(optionIndex, 1);
    setQuizData(newQuizData);
  };

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const newQuizData = { ...quizData };
    newQuizData.questions[questionIndex].answerIndex = optionIndex;
    setQuizData(newQuizData);

    console.log( newQuizData );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log( setQuizData );

    // TODO: Submit quiz data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Quiz Title:
          <input
            type="text"
            name="title"
            value={quizData.title}
            onChange={handleInputChange}
          />
        </label>
      </div>
      {quizData.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>Question {questionIndex + 1}</h3>
          <div>
            <label>
              Question Text:
              <input
                type="text"
                name={`question_${questionIndex}`}
                value={question.question}
                onChange={(event) => handleInputChange(event, questionIndex, -1)}
              />
            </label>
            <button type="button" onClick={() => handleQuestionRemove(questionIndex)}>
              Remove
            </button>
          </div>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                Option {optionIndex + 1}:
                <input
                  type="text"
                  name={`question_${questionIndex}_option_${optionIndex}`}
                  value={option}
                  onChange={(event) => handleInputChange(event, questionIndex, optionIndex)}
                />
              </label>
              <input
                type="radio"
                name={`question_${questionIndex}_answer`}
                value={optionIndex}
                checked={question.answerIndex === optionIndex}
                onChange={() => handleAnswerSelect(questionIndex, optionIndex)}
              />          
              <button
              type="button"
              onClick={() => handleOptionRemove(questionIndex, optionIndex)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleOptionAdd(questionIndex)}>
          Add Option
        </button>
      </div>
    ))}
    <button type="button" onClick={handleQuestionAdd}>
      Add Question
    </button>
    <button type="submit">Create Quiz</button>
  </form>
  );
}

export default CreateQuizForm;
