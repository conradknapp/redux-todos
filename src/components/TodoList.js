import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTodos } from '../actions';

const TodoItem = ({ id, text, isComplete }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} />
    {text}
  </li>
);

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    console.log(this.props);
    return (
      <div className="Todo-List">
        <ul>{this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}</ul>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { todos: state.todos };
// };

export default connect(
  state => state, { getTodos }
)(TodoList);