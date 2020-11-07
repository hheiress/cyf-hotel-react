import React from "react";

function Order(props) {
  return (
    <div>
      <li>
        {props.orderType}: {props.orders}
      </li>
    </div>
  );
}
export default Order;
