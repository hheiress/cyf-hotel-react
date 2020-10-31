import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.orderNum} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};
export default RestaurantButton;
