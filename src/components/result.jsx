import React from "react";
// import QuizApp from './QuizApp';
export default function Result(props) {
  return (
    <>
      <h2>🎉 Congratulations, {props.name}!</h2>
      <h4>📊 You got {props.score} marks</h4>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          fontSize: "16px",
        }}
        onClick={props.onRetake}
      >
        🔁 Retake Quiz
      </button>
    </>
  );
}
