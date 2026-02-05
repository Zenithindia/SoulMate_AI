import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back ❤️</h2>
        <p>Login to continue your SoulMate journey</p>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>

        <p className="register-text">
          Don’t have an account?
          <span onClick={() => navigate("/register")}> {" "}Register</span>
        </p>
      </div>
    </div>
  );
}
