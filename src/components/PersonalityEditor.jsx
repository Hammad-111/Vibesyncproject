import React, { useState } from "react";

function PersonalityEditor(/*{chat}*/) {
  const [traits, setTraits] = useState(["Extroverted", "Humorous"]);

  const handleChange = (e) => {
    setTraits(e.target.value.split(","));
  };

  return (
    <div className="personality-editor">
      <h5>Edit Personality Traits</h5>
      <input
        type="text"
        value={traits.join(",")}
        onChange={handleChange}
        placeholder="Comma separated traits"
      />
      <button>Save</button>
    </div>
  );
}

export default PersonalityEditor;