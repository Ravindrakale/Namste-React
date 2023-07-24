import { useEffect, useState } from "react";
import { fetchRestaurantDetails } from "../services/RestaurantServices";

const useRestaurantDetail = (id) => {
  const [menuItems, setMenuItems] = useState([]);
  const getAllMenusFromResponse = (apiResponse) => {
    const menuCards =
      apiResponse?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    if (menuCards?.length) {
      const menus = menuCards.reduce((menuItms, item) => {
        if (item?.card?.card?.categories?.length) {
          const catMenus = item?.card?.card?.categories.reduce(
            (catMenuItms, catItem) => {
              if (catItem?.itemCards?.length) {
                const innerMenus = catItem?.itemCards?.map((innerMenuItm) => {
                  return innerMenuItm?.card?.info;
                });
                catMenuItms = catMenuItms.concat(innerMenus);
              }
              return catMenuItms;
            },
            []
          );
          menuItms = menuItms.concat(catMenus);
        } else if (item?.card?.card?.itemCards?.length) {
          const innerMenus = item?.card?.card?.itemCards?.map(
            (innerMenuItm) => {
              return innerMenuItm?.card?.info;
            }
          );
          menuItms = menuItms.concat(innerMenus);
        }
        return menuItms;
      }, []);
      return menus;
    }
    return [];
  };

  const loadRestaurantMenus = async () => {
    const response = await fetchRestaurantDetails(id);
    setMenuItems(getAllMenusFromResponse(response));
  };
  useEffect(() => {
    loadRestaurantMenus();
  }, []);
  return menuItems;
};

export default useRestaurantDetail;
