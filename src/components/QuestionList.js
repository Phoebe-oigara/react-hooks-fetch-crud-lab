import React from "react";

function QuestionList({questions}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map ((question) => (
        <li key={questions.id}>{question.prompt}</li>
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
