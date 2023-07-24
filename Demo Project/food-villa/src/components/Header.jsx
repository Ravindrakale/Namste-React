import React, { useState } from "react";
import mainLogo from "../../public/images/food-villa.jpg";
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";

function Header() {
  const [userLoggedin, setUserLoggedin] = useState(false);
  const isOnline = useIsOnline();
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
        </ul>
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
