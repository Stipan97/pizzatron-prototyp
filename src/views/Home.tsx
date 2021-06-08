import React from 'react';
import { useSelector } from 'react-redux';
import { DiscountHome } from '../components/home/DiscountHome';
import { OrderTotal } from '../components/home/OrderTotal';
import { SizePicker } from '../components/home/SizePicker';
import { ToppingSelector } from '../components/home/ToppingsSelector';
import { rootReducerState } from '../models';
import '../style/main.css';
import { NoUser } from './NoUser';

export const Home: React.FC = () => {
  const currentUser = useSelector((state: rootReducerState) => state.user.data);
  return (
    <>
      {currentUser ? (
        <div className="container">
          <div className="container-home">
            <ToppingSelector />
            <SizePicker />
            <DiscountHome />
            <OrderTotal />
          </div>
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};
