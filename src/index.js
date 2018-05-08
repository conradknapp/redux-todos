import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store";
// import { bindActionCreators } from "redux";
// import { updateCurrent } from "./reducers/todo";
import { Provider } from "react-redux";

// const todoChangeHandler = val => store.dispatch(updateCurrent(val));

// const actions = bindActionCreators({ updateCurrent }, store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// const render = () => {
//   const state = store.getState();
//   ReactDOM.render(
//     <App
//       todos={state.todos}
//       currentTodo={state.currentTodo}
//       todoChangeHandler={actions.updateCurrent}
//     />,
//     document.getElementById("root")
//   );
// };

// render();

// store.subscribe(render);

registerServiceWorker();
