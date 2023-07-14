import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
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
  const fetchRestaurantData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642382&lng=73.77694319999999&page_type=DESKTOP_WEB_LISTING"
    );
    const rests = await response.json();
    const restaurantList = rests?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };
  const onSearchChange = (e) => {
    setSearchTxt(e.target.value);
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

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
            return <RestaurantCard key={rest.data.uuid} {...rest.data} />;
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
