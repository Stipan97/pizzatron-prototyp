import React from 'react';
import { ModalOrderDetails } from './ModalOrderDetails';
import { ModalShipping } from './ModalShipping';

interface ModalProps {
  showModal: string;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  totalPrice: number;
}

export const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  totalPrice,
}) => {
  const onClickModalClose = () => {
    setShowModal('modal modal-hide');
  };

  return (
    <div className={showModal}>
      <div className="modal-content">
        <span className="close" onClick={onClickModalClose}>
          &times;
        </span>
        <h1 className="heading">Almost done!</h1>
        <div className="split-screen">
          <ModalOrderDetails totalPrice={totalPrice} />
          <ModalShipping />
        </div>
      </div>
    </div>
  );
};
