import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBookings] = useState(FakeBookings);
  const [searchedProfileId, setSearchedProfileId] = useState(null);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredBookings = booking.filter(
      item => item.firstName === searchVal || item.surname === searchVal
    );
    setBookings(filteredBookings);
  };

  const changeSearchedProfile = newProfileId => {
    setSearchedProfileId(newProfileId);
  };
  // useEffect(()=>{
  //   fetch("https://cyf-react.glitch.me")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("First render");
  //     setBookings(data);
  //   })
  // }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          results={booking}
          onShowProfile={changeSearchedProfile}
        />
        <CustomerProfile id={searchedProfileId} />
      </div>
    </div>
  );
};

export default Bookings;
