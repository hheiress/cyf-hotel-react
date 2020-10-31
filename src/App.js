import React from "react";
import Heading from "./Heading";
import Restaurant from "./Restaurant";
import TouristCities from "./TouristCities";
import Bookings from "./Bookings";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristCities />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
