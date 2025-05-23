// src/components/EmailLogin.jsx
import { useState } from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../firebase";
import "./EmailLogin.css";

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const actionCodeSettings = {
    url: "https://vibe-sync-chat.vercel.app/verify",
    handleCodeInApp: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setSent(true);
    } catch (err) {
      console.error("Error sending email:", err.message);
      setError("Failed to send login link. Try again.");
    }
  };

  return (
    <div className="email-login-container">
      <h2>Login via Email Link</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Link</button>
      </form>

      {sent && <p className="success-msg">Link sent! Check your email.</p>}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default EmailLogin;
