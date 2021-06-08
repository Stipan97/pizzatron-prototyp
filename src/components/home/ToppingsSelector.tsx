import React from 'react';
import { useSelector } from 'react-redux';
import {
  bacon,
  chilli,
  corn,
  egg,
  meat,
  pineapple,
  shroom,
} from '../../assets/icons';
import { rootReducerState } from '../../models';
import { Topping } from './Topping';

export const ToppingSelector: React.FC = () => {
  const price = useSelector((state: rootReducerState) =>
    state.pizza.data ? state.pizza.data.toppingsPrice : 0.0,
  );
  return (
    <div className="topping-selector">
      <h1 className="heading">Toppings! Toppings!</h1>
      <div className="toppings-container">
        <Topping img={chilli} name="Chilli" value={2.5} />
        <Topping img={corn} name="Corn" value={1.5} />
        <Topping img={egg} name="Egg" value={1} />
        <Topping img={pineapple} name="Pineapple" value={3} />
        <Topping img={meat} name="Meat" value={1.75} />
        <Topping img={shroom} name="Shrooms" value={1.25} />
        <Topping img={bacon} name="Bacon" value={2.25} />
      </div>
      <p className="topping-price">Total price +${price}</p>
    </div>
  );
};
