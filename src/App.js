import React, { Component } from "react";
import Users from "./components/Users/Users";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  handleToggleUsers() {
    this.setState((currentState) => {
      return {
        showUsers: !currentState.showUsers,
      };
    });
  }

  render() {
    return (
      <div className="app">
        <button
          className="toggle-button"
          onClick={this.handleToggleUsers.bind(this)}
        >
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && <Users />}
      </div>
    );
  }
}

export default App;
