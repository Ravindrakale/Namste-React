import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurants from "../data/restaurants.json";

function Body() {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(Restaurants);

  const filterRestaurants = () => {
    if (searchTxt) {
      setRestaurants(
        Restaurants.filter((rest) => rest?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase()))
      );
    } else {
      setRestaurants(Restaurants);
    }
  };

  const onSearchChange = (e) => {
    setSearchTxt(e.target.value);
  };

  return (
    <>
      <div className="mt-10">
        <input
          className="search-txt"
          type="text"
          placeholder="Search Restaurants"
          value={searchTxt}
          onChange={onSearchChange}
        />
        <button onClick={filterRestaurants}>Search</button>
      </div>
      <div className="app-body">
        {restaurants?.length ? (
          restaurants.map((rest) => {
            return <RestaurantCard key={rest.data.uuid} {...rest.data} />;
          })
        ) : (
          <div className="mt-10">No Restaurant Found.</div>
        )}
      </div>
    </>
  );
}

export default Body;
