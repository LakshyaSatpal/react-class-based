import React from "react";

import "./UserItem.css";

const UserItem = ({ name }) => {
  return <li className="user-item">{name}</li>;
};

export default UserItem;
