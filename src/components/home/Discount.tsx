import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerState } from '../../models';
import {
  applyDiscountCode,
  setDiscountCode,
} from '../../modules/redux/actions/pizzaAction';

export const Discount: React.FC = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const username = useSelector(
    (state: rootReducerState) => state.user.data?.username,
  );
  const discountCode = useSelector(
    (state: rootReducerState) => state.pizza.data?.discountCode,
  );

  const onChangeCode = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.currentTarget.value);
  };
  const onClickApplyCode = () => {
    if (code === username) {
      setMessage('You entered valid discount code for 5$ discount.');
      if (!discountCode) {
        dispatch(setDiscountCode(code));
        dispatch(applyDiscountCode());
      }
    } else {
      setMessage('Your discount code is not valid. Try again!');
    }
  };

  return (
    <>
      <div className="discount-wrapper">
        <label className="discount-input">
          <input
            type="text"
            placeholder="Enter discount code"
            onChange={onChangeCode}
          />
          <button onClick={onClickApplyCode}>Apply</button>
        </label>
      </div>
      <p className="code-message">{message}</p>
    </>
  );
};
