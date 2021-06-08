import { ThunkAction } from 'redux-thunk';
import {
  ADD_PIZZA_TOPPING,
  REMOVE_PIZZA_TOPPING,
  SET_PIZZA_DISCOUNT_CODE,
  SET_PIZZA_DISCOUNT_CODE_USED,
  SET_PIZZA_QUANTITY,
  SET_PIZZA_SIZE_PRICE,
  SET_PIZZA_TO_DEFAULT,
  SET_TOPPINGS_PRICE,
} from '../../../models';
import { pizzaReducer } from '../reducers/pizzaReducer';

interface SetPizzaToDefault {
  type: typeof SET_PIZZA_TO_DEFAULT;
}

interface AddPizzaTopping {
  type: typeof ADD_PIZZA_TOPPING;
  payload: string;
}

interface RemovePizzaTopping {
  type: typeof REMOVE_PIZZA_TOPPING;
  payload: string;
}

interface SetToppingsPriceAction {
  type: typeof SET_TOPPINGS_PRICE;
  payload: number;
}

interface SetPizzaSizePriceAction {
  type: typeof SET_PIZZA_SIZE_PRICE;
  payload: number;
}

interface SetPizzaDiscountCodePriceAction {
  type: typeof SET_PIZZA_DISCOUNT_CODE;
  payload: string;
}

interface ApplyDiscountCodeAction {
  type: typeof SET_PIZZA_DISCOUNT_CODE_USED;
}

interface SetPizzaQuantity {
  type: typeof SET_PIZZA_QUANTITY;
  payload: number;
}

export type PizzaActions =
  | SetPizzaToDefault
  | AddPizzaTopping
  | RemovePizzaTopping
  | SetToppingsPriceAction
  | SetPizzaSizePriceAction
  | SetPizzaDiscountCodePriceAction
  | ApplyDiscountCodeAction
  | SetPizzaQuantity;

export const setPizzaToDefault = (): ThunkAction<
  void,
  typeof pizzaReducer,
  null,
  PizzaActions
> => {
  return async (dispatch) => {
    dispatch({
      type: SET_PIZZA_TO_DEFAULT,
    });
  };
};

export const addPizzaTopping = (
  topping: string,
): ThunkAction<void, typeof pizzaReducer, null, PizzaActions> => {
  return async (dispatch) => {
    dispatch({
      type: ADD_PIZZA_TOPPING,
      payload: topping,
    });
  };
};

export const removePizzaTopping = (
  topping: string,
): ThunkAction<void, typeof pizzaReducer, null, PizzaActions> => {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_PIZZA_TOPPING,
      payload: topping,
    });
  };
};

export const setToppingsPrice = (
  toppingsPrice: number,
): ThunkAction<void, typeof pizzaReducer, null, PizzaActions> => {
  return async (dispatch) => {
    dispatch({
      type: SET_TOPPINGS_PRICE,
      payload: toppingsPrice,
    });
  };
};

export const setSizePrice = (
  sizePrice: number,
): ThunkAction<void, typeof pizzaReducer, null, PizzaActions> => {
  return async (dispatch) => {
    dispatch({
      type: SET_PIZZA_SIZE_PRICE,
      payload: sizePrice,
    });
  };
};

export const setDiscountCode = (
  discountCode: string,
): ThunkAction<void, typeof pizzaReducer, null, PizzaActions> => {
  return async (dispatch) => {
    dispatch({
      type: SET_PIZZA_DISCOUNT_CODE,
      payload: discountCode,
    });
  };
};

export const applyDiscountCode = (): ThunkAction<
  void,
  typeof pizzaReducer,
  null,
  PizzaActions
> => {
  return async (dispatch) => {
    dispatch({
      type: SET_PIZZA_DISCOUNT_CODE_USED,
    });
  };
};

export const setPizzaQuantity = (
  quantity: number,
): ThunkAction<void, typeof pizzaReducer, null, PizzaActions> => {
  return async (dispatch) => {
    dispatch({
      type: SET_PIZZA_QUANTITY,
      payload: quantity,
    });
  };
};
