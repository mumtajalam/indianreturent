import { combineReducers } from "redux";
import { reducerLogin } from "../components/User/reducerLogin";

const reducers = combineReducers({
  login: reducerLogin,
});
export default reducers;
