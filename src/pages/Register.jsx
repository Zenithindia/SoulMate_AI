import { useNavigate } from "react-router-dom";
import "./Login.css"; // reuse same styling

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Create Account ❤️</h2>
        <p>Start your SoulMate journey today</p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button className="login-btn">
          Register
        </button>

        <p className="register-text">
          Already have an account?
          <span onClick={() => navigate("/login")}>
            {" "}Login
          </span>
        </p>

      </div>
    </div>
  );
}
