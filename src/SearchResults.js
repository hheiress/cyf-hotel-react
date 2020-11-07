import React from "react";
import SearchResultLine from "./SearchResultLine";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  return (
    <div className="table">
      <p>Results ({props.results.length} found)</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>First name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check in date</th>
            <th>Check out date</th>
            <th>Number of nights</th>
            <th>Show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((item, index) => (
            <SearchResultLine
              index={index}
              item={item}
              onShowProfile={props.onShowProfile}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
