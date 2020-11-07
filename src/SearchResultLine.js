import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function SearchResultLine(props) {
  const [color, setColor] = useState(null);
  const clickOnLine = () => {
    if (!color) {
      setColor("table-danger");
    } else {
      setColor(null);
    }
  };
  const showProfile = () => {
    props.onShowProfile(props.item.id);
  };
  let CheckIn = "";
  let CheckOut = "";
  return (
    <tr key={props.index} className={color} onClick={clickOnLine}>
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
      <td>
        <button onClick={showProfile}>Profile</button>
      </td>
    </tr>
  );
}

export default SearchResultLine;
