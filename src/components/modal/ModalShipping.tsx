import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { rootReducerState } from '../../models';
import { auth, firestore } from '../../modules/firebase/firebaseProvider';

export const ModalShipping: React.FC = () => {
  const history = useHistory();
  const [hideCreditCard, setHideCreditCard] = useState(true);
  const pizza = useSelector((state: rootReducerState) => state.pizza.data);
  const [message, setMessage] = useState('');

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postal, setPostal] = useState('');
  const [country, setCountry] = useState('');

  const [paymentType, setPaymentType] = useState('Cash');

  const [ccNum, setCcNum] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCvc] = useState('');

  const onSelectCreditCard = () => {
    setHideCreditCard(false);
    setPaymentType('Credit Card');
  };

  const onUnSelectCreditCard = () => {
    setHideCreditCard(true);
    setPaymentType('Cash');
  };

  const onClickFinishOrder = () => {
    if (street && city && postal && country && paymentType) {
      if (!hideCreditCard) {
        if (ccNum && date && cvc) {
          firestoreOrderInfoUpload();
        } else {
          setMessage('You need to provide your card information.');
        }
      } else {
        firestoreOrderInfoUpload();
      }
    } else {
      setMessage('You need to provide your shipping information.');
    }
  };

  const firestoreOrderInfoUpload = () => {
    firestore
      .collection('orders')
      .doc()
      .set({
        userId: auth.currentUser?.uid,
        pizzaInfo: pizza,
        street: street,
        city: city,
        postalCode: postal,
        country: country,
        paymentType: paymentType,
      })
      .then(() => {
        history.push('./orderComplete');
      })
      .catch(() => {
        console.log('fail');
      });
  };

  const onChangeStreet = (event: ChangeEvent<HTMLInputElement>) => {
    setStreet(event.currentTarget.value);
  };

  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  };

  const onChangePostal = (event: ChangeEvent<HTMLInputElement>) => {
    setPostal(event.currentTarget.value);
  };

  const onChangeCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.currentTarget.value);
  };

  const onChangeCCNum = (event: ChangeEvent<HTMLInputElement>) => {
    setCcNum(event.currentTarget.value);
  };

  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.currentTarget.value);
  };

  const onChangeCVC = (event: ChangeEvent<HTMLInputElement>) => {
    setCvc(event.currentTarget.value);
  };

  return (
    <div className="shipping-details">
      <h2 className="heading2">Shipping information</h2>
      <div className="user-information">
        <div className="street-info">
          <input
            type="text"
            placeholder="Street name and number"
            onChange={onChangeStreet}
          />
        </div>
        <div className="city-postal">
          <input type="text" placeholder="City" onChange={onChangeCity} />
          <input
            type="text"
            placeholder="Postal Code"
            onChange={onChangePostal}
          />
        </div>
        <div className="country-info">
          <input type="text" placeholder="Country" onChange={onChangeCountry} />
        </div>
      </div>
      <div className="payment-details">
        <h2 className="heading2">Payment details</h2>
        <label>
          <input
            type="radio"
            name="payment"
            onClick={onUnSelectCreditCard}
            defaultChecked
          />
          Cash on delivery
        </label>
        <label>
          <input type="radio" name="payment" onClick={onSelectCreditCard} />
          Pay with credit card
        </label>
      </div>
      <div hidden={hideCreditCard}>
        <div className="credit-card-details">
          <div className="user-information">
            <div className="street-info">
              <input
                type="text"
                maxLength={16}
                placeholder="Credit Card Number"
                onChange={onChangeCCNum}
              />
            </div>
            <div className="city-postal">
              <input
                type="date"
                placeholder="Exp. Date"
                onChange={onChangeDate}
              />
              <input
                type="text"
                maxLength={3}
                placeholder="CVC"
                onChange={onChangeCVC}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="error-message">{message}</p>
      <div className="order-buy">
        <button onClick={onClickFinishOrder}>Finish Order</button>
      </div>
    </div>
  );
};
