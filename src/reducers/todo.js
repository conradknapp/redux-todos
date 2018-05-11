import * as actionTypes from '../actions/types'

const initialState = {
  todos: [],
  currentTodo: ""
};

export const updateCurrent = val => ({ type: actionTypes.CURRENT_UPDATE, payload: val });

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, todos: state.todos.concat(action.payload) };
    case actionTypes.CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case actionTypes.GET_TODOS:
      action.payload.then(data => {
         return { ...state, data };
      });
    default:
      return state;
  }
};
