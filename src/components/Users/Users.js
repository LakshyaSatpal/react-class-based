import React from "react";
import UserItem from "../UserItem/UserItem";

import "./Users.css";

const DUMMY_USERS = [
  { id: "u1", name: "John Doe" },
  { id: "u2", name: "Jane Smith" },
  { id: "u3", name: "Alice Johnson" },
];

const UserList = () => {
  return (
    <ul className="user-list">
      {DUMMY_USERS.map((user) => (
        <UserItem key={user.id} name={user.name} />
      ))}
    </ul>
  );
};

export default UserList;
