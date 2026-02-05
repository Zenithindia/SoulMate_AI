// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // Only import Routes and Route
import Landing from "./pages/Landing";
import Personality from "./pages/Personality";
import DeepAIChat from "./pages/DeepAIChat";
import NeuralNetwork from "./pages/NeuralNetwork";
import ExpertChatbot from "./pages/ExpertChatbot";
import Match from "./pages/Match";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Help from "./pages/Help";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/personality" element={<Personality />} />
      <Route path="/deep-ai-chat" element={<DeepAIChat />} />
      <Route path="/neural-network" element={<NeuralNetwork />} />
      <Route path="/expert-chatbot" element={<ExpertChatbot />} />
       <Route path="/match" element={<Match />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
     <Route path="/help" element={<Help />} />

    
    </Routes>
  );
}

export default App;
