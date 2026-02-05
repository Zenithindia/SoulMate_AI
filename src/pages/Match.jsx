import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Match.css";

const Match = () => {
  const navigate = useNavigate();

  // State for profile
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    personalityType: "",
    bio: "",
    interests: [],
    profile_pic: "",
    compatibility: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can generate random profile pic and compatibility for demo
    setProfile({
      ...profile,
      profile_pic: "https://i.pravatar.cc/150",
      compatibility: Math.floor(Math.random() * 100) + 1
    });
    setSubmitted(true);
  };

  return (
    <div className="match-page">
      {!submitted ? (
        <div className="card">
          <h1>Create Your Profile</h1>
          <form className="match-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={profile.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Your Age"
              value={profile.age}
              onChange={handleChange}
              required
            />
            <select
              name="personalityType"
              value={profile.personalityType}
              onChange={handleChange}
              required
            >
              <option value="">Select Personality Type</option>
              <option value="INTJ">INTJ</option>
              <option value="INFJ">INFJ</option>
              <option value="ENTP">ENTP</option>
              <option value="ISFP">ISFP</option>
            </select>
            <input
              type="text"
              name="bio"
              placeholder="Write a short bio"
              value={profile.bio}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="interests"
              placeholder="Enter interests separated by comma"
              value={profile.interests}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  interests: e.target.value.split(",").map(i => i.trim())
                })
              }
            />

            <button type="submit" className="submit-btn">
              Save Profile
            </button>
          </form>
        </div>
      ) : (
        <div className="card">
          <h1>Profile Created 💖</h1>
          <img
            src={profile.profile_pic}
            alt={profile.name}
            className="match-pic"
          />
          <h2>
            {profile.name}, {profile.age}
          </h2>
          <p>{profile.bio}</p>
          {profile.interests.length > 0 && (
            <>
              <h3>Interests:</h3>
              <ul>
                {profile.interests.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </>
          )}
          <p>Compatibility: {profile.compatibility}%</p>
          <button className="back-btn" onClick={() => navigate("/")}>
            ← Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Match;
