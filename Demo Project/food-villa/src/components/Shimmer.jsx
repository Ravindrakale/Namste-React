import React from "react";
import shimmer from "../../public/images/shimmer.gif";

function Shimmer() {
  return (
    <div className="app-body">
      {Array(15)
        .fill("")
        .map((item, inx) => (
          <div key={inx} className="restaurant-card">
            <div className="shimmer-image">
              <img src={shimmer}></img>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Shimmer;
