import React from "react";
import mainLogo from "../../public/images/food-villa.jpg";

function Header() {
console.log("Header Render");

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
    </div>
  );
}

export default Header;
