import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { pizzaTotal } from '../assets/icons';
import { rootReducerState } from '../models';
import { NoUser } from './NoUser';

import '../style/orderComplete.css';
import { setPizzaToDefault } from '../modules/redux/actions/pizzaAction';

export const OrderComplete: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: rootReducerState) => state.user.data);

  const onClickBuyAnother = () => {
    dispatch(setPizzaToDefault());
    history.push('/home');
  };

  return (
    <>
      {currentUser ? (
        <div className="order-complete">
          <img src={pizzaTotal} alt="pizzaSlice" />
          <div className="order-complete-text">
            <h1 className="heading">Your Pizza! Pizza! is on its way!</h1>
            <p>You should be enjoying your meal in no more than 45 minutes.</p>
            <button onClick={onClickBuyAnother}>Buy another</button>
          </div>
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};
