import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pizzaTotal } from '../../assets/icons';
import { rootReducerState } from '../../models';
import { setPizzaQuantity } from '../../modules/redux/actions/pizzaAction';
import { Modal } from '../modal/Modal';

export const OrderTotal: React.FC = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const totalPrice = useSelector((state: rootReducerState) =>
    state.pizza.data ? state.pizza.data.price : 7.5,
  );
  const [showModal, setShowModal] = useState('modal modal-hide');

  const onChangeQunatity = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.currentTarget.value));
    dispatch(setPizzaQuantity(parseInt(event.currentTarget.value)));
  };

  const onClickBuyShowModal = () => {
    setShowModal('modal modal-show');
  };

  return (
    <>
      <div className="container-total-with-image">
        <img
          className="order-total-pizza-image"
          src={pizzaTotal}
          alt="pizzaTotal"
        />
        <div className="container-order-total">
          <div className="order-total-quantity">
            <div className="dashed-border">
              <input
                type="number"
                min={1}
                step={1}
                value={quantity}
                onChange={onChangeQunatity}
              />
              <p>QTY</p>
            </div>
          </div>
          <div className="order-total-price">
            <p className="total-price">${totalPrice}</p>
            <p>ORDER TOTAL</p>
          </div>
          <div className="order-total-buy">
            <button onClick={onClickBuyShowModal}>Buy Pizza! Pizza!</button>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        totalPrice={totalPrice}
      />
    </>
  );
};
