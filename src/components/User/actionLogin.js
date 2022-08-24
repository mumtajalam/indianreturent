import { constants } from "../../redux/constants";

export const setLoginData = (loginData) => {
  console.log("........actionLogin hit...........");
  return {
    type: constants.SET_LOGIN_DATA,
    payload: loginData,
  };
};
