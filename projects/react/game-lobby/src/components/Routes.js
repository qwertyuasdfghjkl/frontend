import React from "react";
import { Route, Switch } from "react-router";
import About from './components/About'



const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
