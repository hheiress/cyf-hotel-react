import React from "react";
import TouristInfoCards from "./TouristInfoCards";

const CityArray = [
  {
    name: "Glasgow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/View_of_Glasgow_from_Queens_Park.jpg",
    href: "https://peoplemakeglasgow.com",
    description: "hgj"
  },
  {
    name: "Manchester",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Manchester_view.jpg",
    href: "https://visitmanchester.com",
    description: "n,,"
  },
  {
    name: "London",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg",
    href: "https://visitlondon.com",
    description: "mn.m"
  }
];

const TouristCities = () => {
  return CityArray.map(city => {
    return (
      <TouristInfoCards
        name={city.name}
        img={city.image}
        href={city.href}
        description={city.description}
      />
    );
  });
};
export default TouristCities;
