import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
