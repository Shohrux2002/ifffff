import React, { useState } from "react";
// import { useSelector } from "react-redux";

const DisplayCounter = (props) => {
  // const count = useSelector((state) => state.count);
  return (
    <div>
      <h1>{props.count}</h1>
    </div>
  );
};
export default DisplayCounter;
