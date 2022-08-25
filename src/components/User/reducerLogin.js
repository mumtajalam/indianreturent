import { constants } from "../../redux/constants";

const initialObject = {};
export const reducerLogin = (state = initialObject, action) => {
  const { type, payload } = action;
  switch (type) {
    case constants.SET_LOGIN_DATA:
      console.log(".........login reducer hit.........");
      return {
        ...state,
        loginDataRedux: payload,
      };
    case constants.SET_LOGOUT:
      console.log(".........logout reducer hit.........");
      return {
        initialObject,
      };
    case constants.SET_URL:
      console.log(".........SETURL in reducer hit.........");
      return {
        currentUrl: payload,
      };
    default:
      return state;
  }
};
