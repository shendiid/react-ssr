import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import getStore from '../store'; // 使用store

export const render = (req) => {
  // const reducer = (state = { name: "sdd" }, action) => {
  //   return state;
  // };
  //const store = createStore(reducer);
  //const store = createStore(reducer, applyMiddleware(thunk));
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
        <html>
            <body>
                <div id="root">${content}</div>
                <script src="/index.js"></script>
            </body>
        </html>
    `;
};
