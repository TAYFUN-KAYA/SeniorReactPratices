import React, { useState } from "react";

const TrickTwo = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    name: "Tayfun Kaya",
    email: "tayfunkaya.uni@gmail.com",
    images: ["profile.png", "cover.png"],
  });

  const changeUser = () => {
    setUser((prev) => ({ ...prev, name: input }));
  };

  return (
    <div>
      <h2>
        <input
          placeholder="New Name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={changeUser}>Change Name</button>
        {user && <span>{user?.name}</span>}
      </h2>
    </div>
  );
};

export default TrickTwo;
