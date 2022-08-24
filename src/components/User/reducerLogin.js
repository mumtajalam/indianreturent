import { constants } from "../../redux/constants";

export const reducerLogin = (state = {}, action) => {
  const { type, payload: loginData } = action;
  switch (type) {
    case constants.SET_LOGIN_DATA:
      console.log(".........login reducer hit.........");
      return {
        ...state,
        loginData,
      };
    default:
      return state;
  }
};
