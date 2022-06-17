import React from "react";
import { ButtonCounterConteaner } from "../redux/container/ButtonCounterContainer";
import { DisplayCounterContainer } from "../redux/container/DisplayCounterConteaner";
import ButtonCounter from "./ButtonCounter";
import DisplayCounter from "./DisplayCounter";

const App = () => {
  return (
    <div>
      <DisplayCounterContainer />
      <ButtonCounterConteaner />
    </div>
  );
};
export default App;
