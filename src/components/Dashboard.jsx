import { useState } from "react";
import ChatViewer from "./ChatViewer";
import EngagementPanel from "./EngagementPanel";
import UserProfileCard from "./UserProfileCard";
import PersonalityEditor from "./PersonalityEditor";
import ManualOverride from "./ManualOverride";
import Alerts from "./Alerts";

export default function Dashboard({ onLogout }) {
  // Mock data for now
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="dashboard">
      <header>
        <h1>VibeSync Dashboard</h1>
        <button onClick={onLogout}>Logout</button>
      </header>
      <div className="dashboard-content">
        <ChatViewer onSelectChat={setSelectedChat} />
        {selectedChat && (
          <div className="chat-details">
            <UserProfileCard chat={selectedChat} />
            <PersonalityEditor chat={selectedChat} />
            <EngagementPanel chat={selectedChat} />
            <ManualOverride chat={selectedChat} />
          </div>
        )}
      </div>
      <Alerts />
    </div>
  );
}
