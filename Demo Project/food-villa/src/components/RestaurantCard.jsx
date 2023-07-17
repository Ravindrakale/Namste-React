import React from "react";
import { Link } from "react-router-dom";

function RestaurantCard({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
  cloudinaryImageId,
  id,
}) {
  const imgFixUril =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="restaurant-card">
      <Link className="rest-card-link" to={`/restaurant/${id}`}>
        <div className="card-image">
          <img src={`${imgFixUril}${cloudinaryImageId}`}></img>
        </div>
        <div className="card-containts">
          <div className="restaurant-details">
            <div className="restaurant-name">{name}</div>
            <div className="restaurant-address">{cuisines?.join(", ")}</div>
          </div>
          <div className="restaurant-other-details">
            <div className="restaurant-rettings">
              <span className="icon-star">*</span>
              <span>{avgRating}</span>
            </div>
            <div>•</div>
            <div>{deliveryTime} MINS</div>
            <div>•</div>
            <div className="nVWSi">{costForTwoString}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RestaurantCard;
