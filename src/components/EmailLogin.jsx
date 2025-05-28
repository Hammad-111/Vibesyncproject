import React from "react";

function InstagramLogin() {
  const handleInstagramLogin = () => {
    // Backend pe ek endpoint banaye jo Instagram OAuth flow start kare
    window.location.href = "https://vibesyncproject.vercel.app/api/instagram/callback";
  };

  return (
    <div style={{textAlign: "center", marginTop: "280px"}}>
      <button
        style={{
          background: "#E1306C",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1.1rem",
          border: "none",
          borderRadius: "8px",
          padding: "12px 32px",
          cursor: "pointer"
        }}
        onClick={handleInstagramLogin}
      >
        Login with Instagram
      </button>
    </div>
  );
}

export default InstagramLogin;