const chats = [
  { id: 1, username: "insta_user1", lastMessage: "Hey!", engagement: 80 },
  { id: 2, username: "insta_user2", lastMessage: "What's up?", engagement: 60 },
];

function ChatViewer({ onSelectChat }) {
  return (
    <div className="chat-viewer">
      <h3>Conversations</h3>
      <ul>
        {chats.map(chat => (
          <li key={chat.id} onClick={() => onSelectChat(chat)}>
            <b>@{chat.username}</b>
            <span>{chat.lastMessage}</span>
            <span>Engagement: {chat.engagement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatViewer;
