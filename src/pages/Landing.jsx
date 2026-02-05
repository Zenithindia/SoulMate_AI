

// import { useState } from "react";
// import SoulMateCard from "../components/SoulMateCard";
// import "./Landing.css";

// export default function Landing() {
//   const [showCard, setShowCard] = useState(false);

//   return (
//     <>
//       {!showCard ? (
//         <div className="hero-container">
//           {/* NAVBAR */}
//           <nav className="navbar">
//             <div className="logo">SoulMate AI</div>
//             <div className="nav-links">
//               <span>Login</span>
//               <span>Help</span>
//             </div>
//           </nav>

//           {/* HERO CONTENT */}
//           <div className="hero-content">
//             <h1>The World’s Most Intelligent Matchmaking Platform</h1>
//             <p>Search by values, personality & emotional compatibility</p>

//             {/* FILTER BAR */}
//             <div className="search-bar">
//               <select>
//                 <option>Looking for</option>
//                 <option>Woman</option>
//                 <option>Man</option>
//               </select>

//               <select>
//                 <option>Age</option>
//                 {Array.from({ length: 54 }, (_, i) => 22 + i).map((age) => (
//                   <option key={age}>{age}</option>
//                 ))}
//               </select>

//               <select>
//                 <option>Religion</option>
//                 <option>Hindu</option>
//                 <option>Muslim</option>
//                 <option>Christian</option>
//                 <option>Sikh</option>
//                 <option>Buddhist</option>
//                 <option>Jain</option>
//                 <option>Other</option>
//               </select>

//               <select>
//                 <option>Mother Tongue</option>
//                 <option>Hindi</option>
//                 <option>Marathi</option>
//                 <option>Gujarati</option>
//                 <option>Tamil</option>
//                 <option>Telugu</option>
//                 <option>Punjabi</option>
//                 <option>Bengali</option>
//                 <option>English</option>
//               </select>

//               <button
//                 className="begin-btn"
//                 onClick={() => setShowCard(true)}
//               >
//                 Let’s Begin
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <SoulMateCard />
//       )}
//     </>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoulMateCard from "../components/SoulMateCard";
import "./Landing.css";

export default function Landing() {
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {!showCard ? (
        <div className="hero-container">
          {/* NAVBAR */}
          <nav className="navbar">
            <div className="logo">SoulMate AI</div>
            <div className="nav-links">
              <span onClick={() => navigate("/login")}>Login</span>
               <span onClick={() => navigate("/help")}>Help</span>
            </div>
          </nav>

          {/* HERO CONTENT */}
          <div className="hero-content">
            <h1>The World’s Most Intelligent Matchmaking Platform</h1>
            <p>Search by values, personality & emotional compatibility</p>

            <div className="search-bar">
              <select>
                <option>Looking for</option>
                <option>Woman</option>
                <option>Man</option>
              </select>

              <select>
                <option>Age</option>
                {Array.from({ length: 54 }, (_, i) => 22 + i).map((age) => (
                  <option key={age}>{age}</option>
                ))}
              </select>

              <select>
                <option>Religion</option>
                <option>Hindu</option>
                <option>Muslim</option>
                <option>Christian</option>
                <option>Sikh</option>
                <option>Other</option>
              </select>

              <select>
                <option>Mother Tongue</option>
                <option>Hindi</option>
                <option>Marathi</option>
                <option>Gujarati</option>
                <option>English</option>
              </select>

              <button className="begin-btn" onClick={() => setShowCard(true)}>
                Let’s Begin
              </button>
            </div>
          </div>
        </div>
      ) : (
        <SoulMateCard />
      )}
    </>
  );
}
