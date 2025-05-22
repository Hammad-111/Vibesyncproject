import { useEffect } from "react";
import { auth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function VerifyLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Enter your email to confirm login:");
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          console.log("User signed in:", result.user);
          window.localStorage.removeItem("emailForSignIn");
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error("Error verifying email link", error);
        });
    }
  }, [navigate]);

  return <div>Verifying login...</div>;
}
