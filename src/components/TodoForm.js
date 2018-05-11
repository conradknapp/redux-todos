import React from "react";
import { connect } from 'react-redux';
import { updateCurrent } from '../reducers/todo';

export const TodoForm = ({ currentTodo, updateCurrent }) => {
  const handleInputChange = event => {
    const val = event.target.value;
    updateCurrent(val);
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

const mapStateToProps = state => ({currentTodo: state.currentTodo});

export default connect(mapStateToProps, { updateCurrent })(TodoForm);