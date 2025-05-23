// src/components/VerifyLogin.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, isSignInWithEmailLink, signInWithEmailLink } from "../firebase";

const VerifyLogin = () => {
  const [message, setMessage] = useState("Verifying...");
  const navigate = useNavigate();

  useEffect(() => {
    const email = window.localStorage.getItem("emailForSignIn");

    if (isSignInWithEmailLink(auth, window.location.href) && email) {
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          setMessage("Login successful! Redirecting...");
          setTimeout(() => navigate("/dashboard"), 2000);
        })
        .catch((error) => {
          console.error("Error verifying email link:", error);
          setMessage("Invalid or expired link.");
        });
    } else {
      setMessage("Invalid login attempt.");
    }
  }, [navigate]);

  return <div className="verify-container"><p>{message}</p></div>;
};

export default VerifyLogin;
