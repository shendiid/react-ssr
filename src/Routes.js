import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Login';

const Routes = () => (
  <div>
    <Route path="/" exact component={Home}></Route>
    <Route path="/login" exact component={Login}></Route>
  </div>
);

export default Routes;