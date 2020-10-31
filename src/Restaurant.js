import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const [salads, setSalads] = useState(0);
  const [cakes, setCakes] = useState(0);
  const orderOne = () => {
    return setOrders(orders + 1);
  };
  const orderTwo = () => {
    return setSalads(salads + 1);
  };
  const orderThree = () => {
    return setCakes(cakes + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orders={orders} orderType="Pizzas" />
        <RestaurantButton orderNum={orderOne} />
        <Order orders={salads} orderType="Salads" />
        <RestaurantButton orderNum={orderTwo} />
        <Order orders={cakes} orderType="Chocolate Cake" />
        <RestaurantButton orderNum={orderThree} />
      </ul>
    </div>
  );
};

export default Restaurant;
