import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import emptyMenu from "../../../public/images/menu.jpg";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642382&lng=73.77694319999999&restaurantId=${id}&submitAction=ENTER`
    );
    const restDetails = await response.json();
    const menuCards =
      restDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
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
      console.log(menus);
      setMenuItems(menus);
    }
  };

  return (
    <div className="rest-details">
      {!menuItems?.length && <div> Loading...</div>}
      {menuItems?.map((menu, index) => {
        return (
          <div className="menu-detail" key={index}>
            <div className="menu-title">
              <div>
                <span className="styles_ribbon__3tZ21 styles_itemRibbon__353Fy">
                  {menu?.ribbon?.text}
                </span>
              </div>
              <div className="styles_itemName__hLfgz">
                <h3 className="styles_itemNameText__3ZmZZ">{menu?.name}</h3>
              </div>
              <div className="styles_itemPortionContainer__1u_tj">
                <span className="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz">
                  <span className="rupee">
                    {menu?.defaultPrice ? menu?.defaultPrice / 100 : 0}
                  </span>
                </span>
              </div>
              <div className="styles_itemDesc__3vhM0">{menu?.description}</div>
            </div>
            <div className="styles_itemImageContainer__3Czsd">
              <div>
                <img
                  alt={menu?.name}
                  className="styles_itemImage__3CsDL"
                  src={
                    menu?.imageId
                      ? "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                        menu?.imageId
                      : emptyMenu
                  }
                ></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantDetail;
