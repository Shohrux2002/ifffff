import { connect } from "react-redux";
import ButtonCounter from "../../components/ButtonCounter";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../actions/counterAction";

export const ButtonCounterConteaner = connect(null, {
  incrementAction,
  decrementAction,
  resetAction,
})(ButtonCounter);
