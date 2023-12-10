import React, { Component } from "react";
import Users from "./components/Users/Users";

import "./App.css";
import UserContext from "./store/user-context";

class App extends Component {
  static contextType = UserContext;

  constructor() {
    super();
    this.state = {
      showUsers: true,
      searchInput: "",
      filteredUsers: [],
    };
  }

  handleToggleUsers() {
    this.setState((currentState) => {
      return {
        showUsers: !currentState.showUsers,
      };
    });
  }

  handleSearchInputChange(event) {
    const searchText = event.target.value.toLowerCase();
    this.setState({
      searchInput: searchText,
    });
  }

  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchInput !== this.state.searchInput) {
      this.setState({
        filteredUsers: this.context.users.filter((item) =>
          item.name.toLowerCase().includes(this.state.searchInput)
        ),
      });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="user-search">
          <input
            placeholder="Search Users"
            value={this.state.searchInput}
            onChange={this.handleSearchInputChange.bind(this)}
          />
        </div>
        <button
          className="toggle-button"
          onClick={this.handleToggleUsers.bind(this)}
        >
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && <Users users={this.state.filteredUsers} />}
      </div>
    );
  }
}

export default App;
