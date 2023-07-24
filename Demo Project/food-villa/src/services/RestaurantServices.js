export const fetchRestaurantList = async () => {
  const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642382&lng=73.77694319999999&page_type=DESKTOP_WEB_LISTING"
  );
  return await response.json();
};

export const fetchRestaurantDetails = async (id) => {
  const response = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642382&lng=73.77694319999999&restaurantId=${id}&submitAction=ENTER`
  );
  return await response.json();
};
