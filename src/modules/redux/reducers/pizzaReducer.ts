import {
  SET_PIZZA_DISCOUNT_CODE,
  SET_PIZZA_SIZE_PRICE,
  ADD_PIZZA_TOPPING,
  SET_PIZZA_TO_DEFAULT,
  SET_TOPPINGS_PRICE,
  REMOVE_PIZZA_TOPPING,
  SET_PIZZA_DISCOUNT_CODE_USED,
  SET_PIZZA_QUANTITY,
} from '../../../models';
import { PizzaState } from '../../../models/pizza';
import { PizzaActions } from '../actions/pizzaAction';

const INITIAL_STATE: PizzaState = {
  data: {
    toppings: [],
    toppingsPrice: 0,
    price: 7.5,
    sizePrice: 7.5,
    discountCode: '',
    discountCodeApplied: false,
    quantity: 1,
  },
};

export const pizzaReducer = (
  state: PizzaState = INITIAL_STATE,
  action: PizzaActions,
) => {
  switch (action.type) {
    case SET_PIZZA_TO_DEFAULT: {
      return (state = INITIAL_STATE);
    }
    case ADD_PIZZA_TOPPING: {
      return {
        ...state,
        data: {
          ...state.data,
          toppings: state.data
            ? [...state.data.toppings, action.payload]
            : action.payload,
        },
      };
    }
    case REMOVE_PIZZA_TOPPING: {
      return {
        ...state,
        data: {
          ...state.data,
          toppings: state.data
            ? state.data.toppings.filter((item) => item !== action.payload)
            : [],
        },
      };
    }
    case SET_TOPPINGS_PRICE: {
      return {
        ...state,
        data: {
          ...state.data,
          toppingsPrice: action.payload,
          price: state.data ? state.data.sizePrice + action.payload : 0,
        },
      };
    }
    case SET_PIZZA_SIZE_PRICE: {
      return {
        ...state,
        data: {
          ...state.data,
          sizePrice: action.payload,
          price: state.data ? state.data.toppingsPrice + action.payload : 0,
        },
      };
    }
    case SET_PIZZA_DISCOUNT_CODE: {
      return {
        ...state,
        data: { ...state.data, discountCode: action.payload },
      };
    }
    case SET_PIZZA_DISCOUNT_CODE_USED: {
      return {
        ...state,
        data: {
          ...state.data,
          discountCodeApplied: true,
          price: state.data ? state.data.price - 5 : 0,
        },
      };
    }
    case SET_PIZZA_QUANTITY: {
      return {
        ...state,
        data: {
          ...state.data,
          quantity: action.payload,
          price: state.data
            ? (state.data.toppingsPrice + state.data.sizePrice) * action.payload
            : 0,
        },
      };
    }
    default: {
      return state;
    }
  }
};
