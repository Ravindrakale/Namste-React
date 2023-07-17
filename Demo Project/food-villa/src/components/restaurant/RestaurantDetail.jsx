import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const { id } = useParams();

  return (
    <>
      <div>RestaurantDetail - {id} </div>
    </>
  );
};

export default RestaurantDetail;
