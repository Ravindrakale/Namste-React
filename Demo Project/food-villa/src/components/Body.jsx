import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurants from "../hooks/useRestaurants";

function Body() {
  const [searchTxt, setSearchTxt] = useState("");
  const allRestaurants = useRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const filterRestaurantsHandler = () => {
    if (searchTxt && allRestaurants?.length) {
      setFilteredRestaurants(
        allRestaurants.filter((rest) =>
          rest?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
        )
      );
    } else if (allRestaurants) {
      setFilteredRestaurants(allRestaurants);
    }
  };
  const onSearchChange = (e) => {
    setSearchTxt(e.target.value);
  };
  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  return allRestaurants?.length ? (
    <>
      <div className="mt-10">
        <input
          className="search-txt"
          type="text"
          placeholder="Search Restaurants"
          value={searchTxt}
          onChange={onSearchChange}
        />
        <button onClick={filterRestaurantsHandler}>Search</button>
      </div>
      <div className="app-body">
        {filteredRestaurants?.length ? (
          filteredRestaurants.map((rest) => {
            return <RestaurantCard key={rest.info.id} {...rest.info} />;
          })
        ) : (
          <div className="mt-10">No Restaurant Found.</div>
        )}
      </div>
    </>
  ) : (
    <Shimmer />
  );
}

export default Body;
