import { constants } from "../../redux/constants";

export const AddFoodToCart = (fooditem) => {
  return {
    type: constants.ADD_FOOD_TO_CART,
    payload: fooditem,
  };
};
