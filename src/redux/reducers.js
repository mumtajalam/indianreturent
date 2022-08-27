import { combineReducers } from "redux";
import { reducerLogin } from "../components/User/reducerLogin";
import { reducerFood } from "../components/Resturent/reducerFood";

const reducers = combineReducers({
  login: reducerLogin,
  cart: reducerFood,
});
export default reducers;
