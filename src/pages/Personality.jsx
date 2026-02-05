

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Personality.css";

const Personality = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data.slice(0, 10)))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (qid, value) => {
    setAnswers(prev => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = async () => {
    const res = await fetch("http://127.0.0.1:8000/submit-answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers })
    });

    const data = await res.json();
    navigate("/match", { state: data.match });
  };

  return (
    <div className="personality-page">
      <h1 className="personality-title">Personality Assessment</h1>

      {questions.map((q) => (
        <div className="question-card" key={q.id}>
          <div className="question-text">{q.question}</div>

          {q.options.map((opt) => (
            <label className="option" key={opt}>
              <input
                type="radio"
                name={`q-${q.id}`}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => handleChange(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button className="match-btn" onClick={handleSubmit}>
        💖 Find My Match
      </button>
    </div>
  );
};

export default Personality;

