import "./Dashboard.css";
import ChatViewer from "./ChatViewer";
import EngagementPanel from "./EngagementPanel";
import UserProfileCard from "./UserProfileCard";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Users</h2>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
        </ul>
      </div>

      <div className="chat-area">
        <ChatViewer />
      </div>

      <div className="right-panel">
        <UserProfileCard />
        <EngagementPanel />
      </div>
    </div>
  );
}
