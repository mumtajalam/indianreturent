import { constants } from "../../redux/constants";

export const setLoginData = (loginData) => {
  console.log("........actionLogin hit...........");
  return {
    type: constants.SET_LOGIN_DATA,
    payload: loginData,
  };
};

export const setLogout = () => {
  return {
    type: constants.SET_LOGOUT,
  };
};

export const setUrl = (url) => {
  return {
    type: constants.SET_URL,
    payload: url,
  };
};
