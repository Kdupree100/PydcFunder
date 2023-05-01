import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_live_51N17lpFVBctAGRxqwMjDE71apSMFt8HnbipR5ZhqJBzMfyNAk0usKHahMkxa6IB2SqwnG9KEKeKkuup1Ns5rRIiH00jlsI0afo');

const StripeSwipe = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>``
      {children}
    </Elements>
  );
};

export default StripeSwipe;
