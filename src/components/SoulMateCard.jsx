import { useNavigate } from "react-router-dom";
import "./SoulMateCard.css";

export default function SoulMateCard() {
  const navigate = useNavigate();

  return (
    <div className="card-wrapper">
      <div className="card">
        <h1>SoulMate AI ❤️</h1>

        <p className="subtitle">
          AI-powered compatibility & relationship intelligence system
        </p>

        <div className="features">
          <button
            className="feature-btn"
            onClick={() => navigate("/personality")}
          >
            💡 Personality-based Matching
          </button>

          <button
            className="feature-btn"
            onClick={() => navigate("/deep-ai-chat")}
          >
            🧠 Deep AI-powered Intake Chat
          </button>

          <button
            className="feature-btn"
            onClick={() => navigate("/neural-network")}
          >
            📊 Neural Network Compatibility Scoring
          </button>

          <button
            className="feature-btn"
            onClick={() => navigate("/expert-chatbot")}
          >
            💬 Relationship Expert Chatbot
          </button>
        </div>

        <button
          className="start-btn"
          onClick={() => navigate("/personality")}
        >
          🚀 Start Your Journey
        </button>
      </div>
    </div>
  );
}

