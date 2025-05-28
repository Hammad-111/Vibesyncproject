function EngagementPanel({ chat }) {
  // Mock engagement score
  const score = chat.engagement;

  return (
    <div className="engagement-panel">
      <h5>Engagement Score</h5>
      <div>{score}</div>
    </div>
  );
}

export default EngagementPanel;
