import React from "react";

export const TodoForm = ({ currentTodo, todoChangeHandler }) => {
  const handleInputChange = event => {
    const val = event.target.value;
    todoChangeHandler(val);
  };

  return (
    <form>
      <input
        type="text"
        onChange={handleInputChange}
        defaultValue={currentTodo}
      />
      <p>{currentTodo}</p>
    </form>
  );
};
