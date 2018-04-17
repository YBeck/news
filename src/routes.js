import React from "react";
import { Switch, Route } from "react-router-dom";
import GetNews from "./components/getNews";
import GetBusiness from "./components/getBusiness";
import GetWeather from "./components/getWeather";
import Home from "./components/home";

const Routes = (
  <Switch>
    <Route path="/news" component={GetNews} />
    <Route path="/business" component={GetBusiness} />
    <Route path="/weather" component={GetWeather} />
    <Route path="/" exact component={Home} />
    <Route render={() => <h1>Page does not exsist 404</h1>} />
  </Switch>
);

export default Routes;
