import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmailLogin.css";

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email for OTP:", email);
    // Later: API call for sending OTP

    navigate("/dashboard");
  };

  return (
    <div className="email-login-container">
      <h2>Email Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
};

export default EmailLogin;
