import React from "react";
import Heading from "./Heading";
//import TouristInfoCards from "./TouristInfoCards";
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
      <Footer />
    </div>
  );
};

export default App;
