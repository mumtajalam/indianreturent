import { constants } from "../../redux/constants";

const initialState = {
  foodCart: [],
  restDetails: {},
};
export const reducerFood = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.ADD_FOOD_TO_CART:
      let temp = [...state.foodCart, payload];
      return { ...state, foodCart: temp };
    case constants.ADD_REST_DETAILS:
      return { ...state, restDetails: payload };
    default:
      return state;
  }
};
