import React from "react";
import { Route, Switch } from "react-router-dom";
import RestaurantDetails from "../components/RestaurantDetails";
import Restaurants from "../components/Restaurants";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Restaurants />
        </Route>
        <Route path="/restaurant-review">
          <RestaurantDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
