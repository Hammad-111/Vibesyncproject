import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OTPVerify = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("otpEmail");

  useEffect(() => {
    if (!email) navigate("/");
  }, [email, navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/verify-otp", { email, otp });
      localStorage.removeItem("otpEmail");
      navigate("/dashboard");
    } catch {
      setError("Invalid or expired OTP");
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default OTPVerify;
