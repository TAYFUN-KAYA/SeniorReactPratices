import React, { useState } from "react";

const TrickThree = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    city: "",
    adress: "",
  });

  const onChangeValue = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          gap: 32,
        }}
      >
        <input
          type={"text"}
          onChange={onChangeValue}
          name="name"
          placeholder="name"
        />
        <input
          type={"text"}
          onChange={onChangeValue}
          name="surname"
          placeholder="surname"
        />
        <input
          type={"text"}
          onChange={onChangeValue}
          name="email"
          placeholder="email"
        />
        <input
          type={"text"}
          onChange={onChangeValue}
          name="password"
          placeholder="password"
        />
        <input
          type={"text"}
          onChange={onChangeValue}
          name="city"
          placeholder="city"
        />
        <input
          type={"text"}
          onChange={onChangeValue}
          name="adress"
          placeholder="adress"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default TrickThree;
