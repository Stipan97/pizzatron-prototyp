import React from 'react';
import { useDispatch } from 'react-redux';
import { setSizePrice } from '../../modules/redux/actions/pizzaAction';

interface SizeProps {
  value: number;
  size: string;
  checked: boolean;
}

export const Size: React.FC<SizeProps> = ({ value, size, checked }) => {
  const dispatch = useDispatch();

  const onSelectSize = () => {
    dispatch(setSizePrice(value));
  };

  return (
    <label className="size-item">
      {checked ? (
        <input
          type="radio"
          name="size"
          value={value}
          onClick={onSelectSize}
          defaultChecked
        />
      ) : (
        <input type="radio" name="size" value={value} onClick={onSelectSize} />
      )}
      <div className="size-wrapper">
        <div className="size-name">{size}</div>
      </div>
    </label>
  );
};
