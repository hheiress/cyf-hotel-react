import React from "react";

const DataFooter = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <ul>
        <h2>Contact us! </h2>
        {DataFooter.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
