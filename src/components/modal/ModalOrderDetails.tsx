import React from 'react';
import { useSelector } from 'react-redux';
import { rootReducerState } from '../../models';
import { Discount } from '../home/Discount';

interface ModalOrderDetailsProps {
  totalPrice: number;
}

export const ModalOrderDetails: React.FC<ModalOrderDetailsProps> = ({
  totalPrice,
}) => {
  const toppings = useSelector((state: rootReducerState) =>
    state.pizza.data ? state.pizza.data.toppings : [],
  );
  const quantity = useSelector((state: rootReducerState) =>
    state.pizza.data ? state.pizza.data.quantity : 1,
  );
  return (
    <div className="order-details">
      <h2 className="heading2">Order details</h2>
      <div className="topping-details">
        <h3 className="heading3">TOPPINGS</h3>
        <p>
          {toppings.map((item, i) => {
            if (toppings.length === i + 1) {
              return item;
            } else {
              return item + ', ';
            }
          })}
        </p>
        <p>QTY: {quantity}</p>
      </div>
      <div className="message-details">
        <h3>Delivery</h3>
        <p>Free delivery withing 1hour or you don't have to pay.</p>
      </div>
      <div className="discount-details">
        <Discount />
      </div>
      <div className="total-price-details">
        <p className="total-price-heading">Total price</p>
        <p className="total-price">${totalPrice}</p>
      </div>
    </div>
  );
};
