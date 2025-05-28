import { useState } from "react";

function ManualOverride({ chat }) {
  const [msg, setMsg] = useState("");

  const handleSend = () => {
    // TODO: Send message via backend
    alert(`Message sent to @${chat.username}: ${msg}`);
    setMsg("");
  };

  return (
    <div className="manual-override">
      <h5>Manual Message</h5>
      <input
        type="text"
        value={msg}
        onChange={e => setMsg(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ManualOverride;