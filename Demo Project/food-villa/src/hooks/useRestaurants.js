import { useEffect, useState } from "react";
import { fetchRestaurantList } from "../services/RestaurantServices";

const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const loadAllRestaurants = async () => {
    const rests = await fetchRestaurantList();
    if (rests?.data?.cards?.length) {
      const cards = rests?.data?.cards?.find(
        (card) => card?.card?.card?.id === "restaurant_grid_listing"
      );
      const restaurantList =
        cards?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestaurants(restaurantList);
    }
  };
  useEffect(() => {
    loadAllRestaurants();
  }, []);
  return allRestaurants;
};

export default useRestaurants;
