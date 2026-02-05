import React, { useState } from "react";
import "./ExpertChatbot.css";

export default function ExpertChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m your Relationship Expert AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulated bot response (replace with AI API call)
    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: "Thank you for sharing. Could you tell me more about the situation?",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <div className="chat-page">
      <div className="chat-card">
        <h1>Relationship Expert Chatbot</h1>
        <p className="subtitle">Chat with our AI relationship expert for guidance.</p>

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
