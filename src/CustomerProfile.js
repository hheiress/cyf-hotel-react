import React from "react";

const CustomerProfile = props => {
  console.log(props.id);
  return props.id ? <p> Customer {props.id} Profile</p> : <></>;
};
export default CustomerProfile;
