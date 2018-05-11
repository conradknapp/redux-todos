import * as actionTypes from './types';

const BASE_URL = 'http://localhost:8080/todos';

export const getTodos = () => {
  const res = fetch(BASE_URL).then(res => res.json());

  return {
    type: actionTypes.GET_TODOS,
    payload: res
  }
}

export const createTodo = (text) => {
  const res = fetch(BASE_URL, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text, isComplete: false })
  })
  .then(res => res.json());

  return {
    type: actionTypes.CREATE_TODO,
    payload: res
  }
}