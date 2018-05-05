import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Todos</h1>
        </header>
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
          <div className="Todo-List">
            <ul>
              <li>
                <input type="checkbox" />Create UI
              </li>
              <li>
                <input type="checkbox" />Make More Components
              </li>
              <li>
                <input type="checkbox" />Hook Up To API
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
