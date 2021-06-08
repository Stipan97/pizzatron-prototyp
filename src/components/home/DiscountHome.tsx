import React from 'react';
import { Discount } from './Discount';

export const DiscountHome: React.FC = () => {
  return (
    <div className="container-discount">
      <h1 className="heading">Get the discount</h1>
      <Discount />
    </div>
  );
};
