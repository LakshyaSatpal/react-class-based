import React, { useState } from "react";
import Users from "./components/Users/Users";

import "./App.css";

const App = () => {
  const [showUsers, setShowUsers] = useState(true);

  const handleToggleUsers = () => {
    setShowUsers((prevShowUsers) => !prevShowUsers);
  };

  return (
    <div className="app">
      <button className="toggle-button" onClick={handleToggleUsers}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && <Users />}
    </div>
  );
};

export default App;
