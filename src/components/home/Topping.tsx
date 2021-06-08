import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerState } from '../../models';
import {
  addPizzaTopping,
  removePizzaTopping,
  setToppingsPrice,
} from '../../modules/redux/actions/pizzaAction';

interface ToppingProps {
  img: string;
  name: string;
  value: number;
}

export const Topping: React.FC<ToppingProps> = ({ img, name, value }) => {
  const price = useSelector((state: rootReducerState) =>
    state.pizza.data ? state.pizza.data.toppingsPrice : 0.0,
  );
  const dispatch = useDispatch();

  const onChangeTopping = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      dispatch(setToppingsPrice(price + value));
      dispatch(addPizzaTopping(name));
    } else {
      dispatch(setToppingsPrice(price - value));
      dispatch(removePizzaTopping(name));
    }
  };

  return (
    <label className="topping-item">
      <input type="checkbox" value={value} onChange={onChangeTopping} />
      <div className="topping-wrapper">
        <div className="topping-icon-container">
          <img src={img} alt={name} />
        </div>
        <div className="topping-name">{name}</div>
      </div>
    </label>
  );
};
