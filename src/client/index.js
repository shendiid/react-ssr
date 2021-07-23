import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { createStore ,applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import getStore from '../store'; // 使用store

// const reducer = (state = { name: "sdd" }, action) => {
//   return state;
// };
//const store = createStore(reducer);
//const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter><Routes /></BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(<App />, document.getElementById("root"));
