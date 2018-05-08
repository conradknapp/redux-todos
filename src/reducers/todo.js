const initialState = {
  todos: [
    {
      id: 1,
      text: "Design UI",
      isComplete: true
    },
    {
      id: 2,
      text: "Add Components",
      isComplete: false
    },
    {
      id: 3,
      text: "Hook up to API",
      isComplete: false
    }
  ],
  currentTodo: "temp"
};

const ADD_TODO = "ADD_TODO";
const CURRENT_UPDATE = "CURRENT_UPDATE";

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: state.todos.concat(action.payload) };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};
