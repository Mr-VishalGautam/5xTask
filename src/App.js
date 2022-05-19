import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RestaurantDetails from "./components/RestaurantDetails";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Restaurants />} />
          <Route
            path="/restaurant-review"
            element={<RestaurantDetails />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
