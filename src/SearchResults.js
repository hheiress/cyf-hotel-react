import React, { useState } from "react";
import SearchResultLine from "./SearchResultLine";

const SearchResults = props => {
  return (
    <div className="table">
      <p>Results ({props.results.length} found)</p>
      <table className="table">
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
          {props.results.map((item, index) => (
            <SearchResultLine index={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
