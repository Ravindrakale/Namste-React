import React from "react";
import mainLogo from "../../public/images/food-villa.jpg";

function Header() {
  return (
    <div className="app-header">
      <div>
        <a href="/">
          <img src={mainLogo}></img>
        </a>
      </div>
      <div>
        <ul className="nav-menu">
          <li>Hone</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
