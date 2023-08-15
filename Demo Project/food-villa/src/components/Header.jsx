import React, { useState } from "react";
import mainLogo from "../../public/images/food-villa.jpg";
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

function Header() {
  const [userLoggedin, setUserLoggedin] = useState(false);
  const isOnline = useIsOnline();
  const dispatch = useDispatch();
  const handleRemoveItem = (itm) => {
    dispatch(removeItem(itm));
  };
  const cartIterms = useSelector((store) => store.cart.items);
  return (
    <div className="app-header">
      <div>
        <Link to="/">
          <img src={mainLogo} alt="Food Villa"></img>
        </Link>
      </div>
      <div>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <div className="cart-container">
        <div>Cart {cartIterms?.length}-Iterms</div>

        <div className="cart-item-container">
          {cartIterms?.length > 0 &&
            cartIterms?.map((cartItm, index) => (
              <div key={`${cartItm?.id}-${index}`} className="menu-items">
                <div>{cartItm.name} </div>
                <div>
                  <button onClick={() => handleRemoveItem(cartItm)}>-</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        {userLoggedin ? (
          <button onClick={() => setUserLoggedin(false)}>Log out</button>
        ) : (
          <button onClick={() => setUserLoggedin(true)}>Log In</button>
        )}
        {isOnline ? <h1> 🟢 : On line</h1> : <h1> 🔴: Off Line</h1>}
      </div>
    </div>
  );
}

export default Header;
