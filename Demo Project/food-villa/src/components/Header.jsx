import React, { useState } from "react";
import mainLogo from "../../public/images/food-villa.jpg";

function Header() {
  const [userLoggedin, setUserLoggedin] = useState(false);
  return (
    <div className="app-header">
      <div>
        <a href="/">
          <img src={mainLogo} alt="Food Villa"></img>
        </a>
      </div>
      <div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        {userLoggedin ? (
          <button onClick={() => setUserLoggedin(false)}>Log out</button>
        ) : (
          <button onClick={() => setUserLoggedin(true)}>Log In</button>
        )}
      </div>
    </div>
  );
}

export default Header;
