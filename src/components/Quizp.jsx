import React, { useEffect, useState } from "react";
import Result from "./result";

export default function Quizp(props) {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [quizsubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=20&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const formattedQuestions = data.results.map((question, index) => {
          const options = [
            ...question.incorrect_answers,
            question.correct_answer,
          ];
          return {
            ...question,
            options: options.sort(() => Math.random() - 0.5),
            number: index + 1,
          };
        });
        setQuestions(formattedQuestions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Store selected answer for current question
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer((prev) => ({ ...prev, [count]: answer }));
  };

  // Submit current question
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (selectedAnswer[count] !== undefined) {
      // Go to next question if not last
      if (count < questions.length - 1) {
        setCount(count + 1);
      } else {
        alert("All questions attempted. Click 'End Quiz' to submit.");
      }
    } else {
      alert("Please select an answer before submitting.");
    }
  };

  // Submit the whole quiz
  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    let newScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswer[index] === q.correct_answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setQuizSubmitted(true);
  };

  const handlePrevious = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {questions.length > 0 && !quizsubmitted ? (
        <>
          <h2>👋 Hello, {props.name}!</h2>
          <h3>🧠 Quiz Time!</h3>

          <form onSubmit={handleSubmitQuestion}>
            <p>
              Question {questions[count].number} of {questions.length}
            </p>
            <h3>❓ {questions[count].question}</h3>

            {questions[count].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={option}
                  checked={selectedAnswer[count] === option}
                  onChange={() => handleAnswerSelect(option)}
                />
                <label htmlFor={`option-${index}`}> {option}</label>
              </div>
            ))}

            <br />
            <button type="submit">✅ Submit</button>
          </form>
          <br />
          <button onClick={handlePrevious} disabled={count === 0}>
            ⬅️ Previous
          </button>
          <button onClick={handleSubmitQuiz}>🏁 End Quiz</button>
        </>
      ) : (
        <Result name={props.name} score={score} onRetake={props.onRetake}/>
      )}
    </>
  );
}
