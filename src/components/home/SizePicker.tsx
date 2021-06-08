import React from 'react';
import { Size } from './Size';

export const SizePicker: React.FC = () => {
  return (
    <div className="container-size">
      <h1 className="heading">Pizza! Pizza! size</h1>
      <div className="pizza-size-selector">
        <Size value={7.5} size="S" checked={true} />
        <Size value={14} size="M" checked={false} />
        <Size value={25} size="L" checked={false} />
      </div>
    </div>
  );
};
