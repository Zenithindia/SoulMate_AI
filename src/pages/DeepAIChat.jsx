import React, { useState } from "react";
import "./DeepAIChat.css";

export default function DeepAIChat() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Let's start your personality intake. What's your name?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response (replace this with AI API call)
    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: "Thanks! Tell me a bit about your interests and hobbies.",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <div className="chat-page">
      <div className="chat-card">
        <h1>Deep AI Intake Chat</h1>
        <p className="subtitle">
          Answer a few questions and let our AI understand you better.
        </p>

        <div className="chat-window">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender === "bot" ? "bot" : "user"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <form className="chat-input" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
