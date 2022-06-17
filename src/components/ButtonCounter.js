import React from "react";
// import { useDispatch } from "react-redux";
// import {
//   incrementAction,
//   decrementAction,
//   resetAction,
// } from "../redux/actions/counterAction";

const ButtonCounter = (props) => {
  // const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => props.incrementAction()}>Increment</button>
      <button onClick={() => props.resetAction()}>Reset</button>
      <button onClick={() => props.decrementAction()}>Decrement</button>
    </div>
  );
};
export default ButtonCounter;
