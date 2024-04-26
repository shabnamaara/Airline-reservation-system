import React, { useState } from 'react';
import BookingForm from './BookingForm';
import PaymentForm from './PaymentForm';
import ThankyouPage from './ThankyouPage';

const BookingPage = () => {
  const [passengerData, setPassengerData] = useState(null);
  const [paymentToken, setPaymentToken] = useState(null);

  const handlePassengerSubmit = (data) => {
    setPassengerData(data);
  };

  const handlePayment = (token) => {
    setPaymentToken(token);
  };

  return (
    <div>
      {!passengerData && <BookingForm onSubmit={handlePassengerSubmit} />}
      {passengerData && !paymentToken && <PaymentForm onPayment={handlePayment} />}
      {paymentToken && <ThankYouPage />}
    </div>
  );
};

export default BookingPage;
