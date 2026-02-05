

import React, { useState } from "react";
import "./NeuralNetwork.css";

export default function NeuralNetwork() {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
    religion: "",
    motherTongue: "",
    searchGender: ""
  });

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  // ---------------- Handle Form ----------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ---------------- Fetch Backend ----------------
  const handleCalculate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/submit-answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          answers: {}, // personality answers (optional)
          gender: form.gender,
          searchGender: form.searchGender,
          religion: form.religion,
          motherTongue: form.motherTongue,
          age: Number(form.age)
        })
      });

      const data = await res.json();

      if (data.matches) {
        setMatches(data.matches);
      }

    } catch (err) {
      console.error("Backend Error:", err);
      alert("Server not running or fetch failed");
    }

    setLoading(false);
  };

  return (
    <div className="nn-page">
      <div className="card">

        <h1>AI Compatibility Match Finder ❤️</h1>
        <p className="subtitle">
          Fill your profile and discover compatible partners
        </p>

        <form className="nn-form" onSubmit={handleCalculate}>

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <select name="gender" onChange={handleChange} required>
            <option value="">Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            type="number"
            name="age"
            placeholder="Your Age"
            onChange={handleChange}
            required
          />

          <select name="religion" onChange={handleChange} required>
            <option value="">Religion</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Christian</option>
          </select>

          <select name="motherTongue" onChange={handleChange} required>
            <option value="">Mother Tongue</option>
            <option>Marathi</option>
            <option>Hindi</option>
            <option>Urdu</option>
          </select>

          <select name="searchGender" onChange={handleChange} required>
            <option value="">Looking For</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button type="submit" className="calculate-btn">
            {loading ? "Finding Matches..." : "Find Matches"}
          </button>

        </form>

        {/* -------- MATCH RESULT -------- */}
        {matches.length > 0 && (
          <div className="score-result">
            <h2>Top Matches</h2>

            {matches.map((m, index) => (
              <div key={index} className="match-card">

                {/* Profile Image */}
                {m.photo && (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="profile-pic"
                  />
                )}

                <p><strong>{m.name}</strong></p>
                <p>Age: {m.age}</p>
                <p>Religion: {m.religion}</p>
                <p>Mother Tongue: {m.motherTongue}</p>
                <p>Compatibility: {m.score}%</p>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}


