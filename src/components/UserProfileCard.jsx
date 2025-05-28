function UserProfileCard({ chat }) {
  // Mock personality traits
  const traits = ["Extroverted", "Humorous"];

  return (
    <div className="user-profile-card">
      <h4>@{chat.username}</h4>
      <p>Personality: {traits.join(", ")}</p>
      {/* Add more user info as needed */}
    </div>
  );
}

export default UserProfileCard;
