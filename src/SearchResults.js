import React from "react";
import moment from "moment";

const SearchResults = props => {
  let CheckIn = "";
  let CheckOut = "";
  return (
    <div className="table">
      <p>Results ({props.results.length} found)</p>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>First name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check in date</th>
            <th>Check out date</th>
            <th>Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(item => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>
                {" "}
                {
                  ((CheckIn = moment(item.checkInDate)),
                  (CheckOut = moment(item.checkOutDate)),
                  CheckOut.diff(CheckIn, "days"))
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
