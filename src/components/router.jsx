import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Landing } from "./landing";
import { App } from "./app";
import { NotFound } from "./not-found";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/restaurant/:restaurantId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
