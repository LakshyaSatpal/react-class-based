import React, { Component } from "react";
import UserItem from "../UserItem/UserItem";

import "./Users.css";

const DUMMY_USERS = [
  { id: "u1", name: "John Doe" },
  { id: "u2", name: "Jane Smith" },
  { id: "u3", name: "Alice Johnson" },
];

class UserList extends Component {
  render() {
    return (
      <ul className="user-list">
        {DUMMY_USERS.map((user) => (
          <UserItem key={user.id} name={user.name} />
        ))}
      </ul>
    );
  }
}

export default UserList;
