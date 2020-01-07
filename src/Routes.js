import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./components/main";
import About from "./components/about";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default Routes;
