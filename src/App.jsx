import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EmailLogin from "./components/EmailLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
