import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    return setOrders(orders + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orders={orders} />
        <RestaurantButton orderNum={orderOne} />
      </ul>
    </div>
  );
};

export default Restaurant;
