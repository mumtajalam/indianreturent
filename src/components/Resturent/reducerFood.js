import { constants } from "../../redux/constants";

const initialState = {
  foodCart: [],
};
export const reducerFood = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.ADD_FOOD_TO_CART:
      let temp = [...state.foodCart, payload];
      return { ...state, foodCart: temp };
    default:
      return state;
  }
};
