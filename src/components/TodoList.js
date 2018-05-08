import React from "react";

const TodoItem = ({ id, text, isComplete }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} />
    {text}
  </li>
);

export const TodoList = ({ todos }) => (
  <div className="Todo-List">
    <ul>{todos.map(todo => <TodoItem key={todo.id} {...todo} />)}</ul>
  </div>
);
