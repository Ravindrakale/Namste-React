import React from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurants from "../data/restaurants.json";

function Body() {
  return (
    <div className="app-body">
      {Restaurants.map((rest) => {
        return <RestaurantCard key={rest.data.uuid} {...rest.data} />;
      })}
    </div>
  );
}

export default Body;
