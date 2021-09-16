import React from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "../screens/details/Details";
import Home from "../screens/home/Home";
import BookShow from "../screens/bookshow/BookShow";

var Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Details" component={Detail} />
      <Route exact path="/BookShow" component={BookShow} />
    </Switch>
  );
};
export default Routes;
