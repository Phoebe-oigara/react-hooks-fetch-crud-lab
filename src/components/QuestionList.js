import React,  {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])
  const [addQuestion, setAddQuestions] = useState({})

  useEffect ( () => {
    fetch("http://localhost:4000/questions")
    .then (r => r.json())
    .then(questions=> setQuestions(questions))
    console.log(questions)
}, [])

function deleteQuestion(id) {
  const  newQuestionArray= questions.filter(question => question.id !== id)
  setQuestions(newQuestionArray)
}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <QuestionItem key={question.id} question={question} onDeleteQuestion={deleteQuestion}/>
  ))}
     </ul>

    </section>
  );
}

export default QuestionList;
