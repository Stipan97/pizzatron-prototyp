export interface Pizza {
  toppings: string[];
  toppingsPrice: number;
  sizePrice: number;
  price: number;
  discountCode: string;
  discountCodeApplied: boolean;
  quantity: number;
}

export interface PizzaState {
  data?: Pizza;
}
