import React, { Component } from "react";
import UserItem from "../UserItem/UserItem";

import "./Users.css";

class UserList extends Component {
  render() {
    return (
      <ul className="user-list">
        {this.props.users.map((user) => (
          <UserItem key={user.id} name={user.name} />
        ))}
      </ul>
    );
  }
}

export default UserList;
