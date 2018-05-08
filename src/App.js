import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

import { connect } from "react-redux";

// import { bindActionCreators } from "redux";
import { updateCurrent } from "./reducers/todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Todos</h1>
        </header>
        <div className="Todo-App">
          <TodoForm
            currentTodo={this.props.currentTodo}
            todoChangeHandler={this.props.updateCurrent}
          />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

// export default App;

const mapStateToProps = state => state;

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ updateCurrent }, dispatch);

const mapDispatchToProps = { updateCurrent };

export default connect(mapStateToProps, mapDispatchToProps)(App);
