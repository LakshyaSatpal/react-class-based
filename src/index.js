import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import UserContext from "./store/user-context";

const DUMMY_USERS = [
  { id: "u1", name: "John Doe" },
  { id: "u2", name: "Jane Smith" },
  { id: "u3", name: "Alice Johnson" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext.Provider value={{ users: DUMMY_USERS }}>
    <App />
  </UserContext.Provider>
);
