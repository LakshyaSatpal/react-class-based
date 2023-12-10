import React, { Component } from "react";

import "./UserItem.css";

class UserItem extends Component {
  componentWillUnmount() {
    console.log("User item unmounted");
  }

  render() {
    return <li className="user-item">{this.props.name}</li>;
  }
}

export default UserItem;
