import React, { useState } from "react";
import moment from "moment";

function SearchResultLine(props) {
  const [color, setColor] = useState(null);
  const clickOnLine = () => {
    if (!color) {
      setColor("table-danger");
    } else {
      setColor(null);
    }
  };
  let CheckIn = "";
  let CheckOut = "";
  return (
    <tr key={props.index} className={color} onClick={clickOnLine}>
      <td>{props.item.id}</td>
      <td>{props.item.title}</td>
      <td>{props.item.firstName}</td>
      <td>{props.item.surname}</td>
      <td>{props.item.email}</td>
      <td>{props.item.roomId}</td>
      <td>{props.item.checkInDate}</td>
      <td>{props.item.checkOutDate}</td>
      <td>
        {" "}
        {
          ((CheckIn = moment(props.item.checkInDate)),
          (CheckOut = moment(props.item.checkOutDate)),
          CheckOut.diff(CheckIn, "days"))
        }
      </td>
    </tr>
  );
}

export default SearchResultLine;
