// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailLogin from "./components/EmailLogin";
import Dashboard from "./components/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div>
        {!user ? (
          <EmailLogin onLogin={setUser} />
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard user={user} onLogout={() => setUser(null)} />} />
            <Route path="/dashboard" element={<Dashboard user={user} onLogout={() => setUser(null)} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
