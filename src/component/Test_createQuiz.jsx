import { useState } from "react";

function CreateQuizForm() {
  const [quizData, setQuizData] = useState({
    title: "",
    questions: [
      {
        text: "",
        options: [{ text: "", isCorrect: false }],
      },
    ],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuizData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuestionAdd = () => {
    setQuizData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        {
          text: "",
          options: [{ text: "", isCorrect: false }],
        },
      ],
    }));
  };

  const handleQuestionRemove = (questionIndex) => {
    setQuizData((prevData) => ({
      ...prevData,
      questions: prevData.questions.filter(
        (_, index) => index !== questionIndex
      ),
    }));
  };

  const handleOptionAdd = (questionIndex) => {
    setQuizData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((question, index) =>
        index === questionIndex
          ? {
              ...question,
              options: [...question.options, { text: "", isCorrect: false }],
            }
          : question
      ),
    }));
  };

  const handleOptionRemove = (questionIndex, optionIndex) => {
    setQuizData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((question, index) =>
        index === questionIndex
          ? {
              ...question,
              options: question.options.filter(
                (_, index) => index !== optionIndex
              ),
            }
          : question
      ),
    }));
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const { name, value, checked } = event.target;
    setQuizData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((question, index) =>
        index === questionIndex
          ? {
              ...question,
              options: question.options.map((option, index) =>
                index === optionIndex
                  ? {
                      ...option,
                      [name]: name === "isCorrect" ? checked : value,
                    }
                  : option
              ),
            }
          : question
      ),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(quizData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quiz Title:
        <input
          type="text"
          name="title"
          value={quizData.title}
          onChange={handleInputChange}
        />
      </label>
      {quizData.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <label>
            Question {questionIndex + 1}:
            <input
              type="text"
              value={question.text}
              onChange={(event) =>
                setQuizData((prevData) => ({
                  ...prevData,
                  questions: prevData.questions.map((q, index) =>
                    index === questionIndex
                      ? { ...q, text: event.target.value }
                      : q
                  ),
                }))
              }
            />
          </label>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                Option {optionIndex + 1}:
                <input
              type="text"
              value={option.text}
              name="text"
              onChange={(event) =>
                handleOptionChange(questionIndex, optionIndex, event)
              }
            />
          </label>
          <label>
            Is Correct:
            <input
              type="checkbox"
              checked={option.isCorrect}
              name="isCorrect"
              onChange={(event) =>
                handleOptionChange(questionIndex, optionIndex, event)
              }
            />
          </label>
          {question.options.length > 1 && (
            <button
              type="button"
              onClick={() => handleOptionRemove(questionIndex, optionIndex)}
            >
              Remove Option
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => handleOptionAdd(questionIndex)}>
        Add Option
      </button>
      {quizData.questions.length > 1 && (
        <button type="button" onClick={() => handleQuestionRemove(questionIndex)}>
          Remove Question
        </button>
      )}
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
