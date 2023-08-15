import { useParams } from "react-router-dom";
import emptyMenu from "../../../public/images/menu.jpg";
import useRestaurantDetail from "../../hooks/useRestaurantDetail";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurantDetail = () => {
  const { id } = useParams();
  const menuItems = useRestaurantDetail(id);

  const dispatch = useDispatch();

  const handleAddItemToCart = (item) => {
    dispatch(addItem(item));
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
              <div
                className="add-button"
                onClick={() =>
                  handleAddItemToCart({ id: menu?.id, name: menu?.name })
                }
              >
                ADD
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantDetail;
