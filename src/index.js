import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import { Provider } from "react-redux";
import todo_reducer from "./reducers/todo";

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(todo_reducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
