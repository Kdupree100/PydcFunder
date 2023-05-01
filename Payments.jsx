import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeSwipe } from '../components';

const Payments = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [cardHolderName, setCardHolderName] = useState('');

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
    
      const cardElement = elements.getElement(CardElement);
      console.log(cardElement);
    
      if (!cardElement) {
        // CardElement is not properly initialized or mounted
        console.log("CardElement is not properly initialized or mounted.");
        console.log(stripe);
        return;
      }
    
      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: cardHolderName,
        },
      });
    
      if (error) {
        console.error(error);
      } else {
        console.log(paymentMethod);
      }
    };
    

  return (
    <StripeSwipe>
      <div className="bg-white p-8 rounded-md shadow-md max-w-md"
        style={{
          background: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToiD5ni0GkQfaabCJuFSsfdwxiYcevFhv3g&usqp=CAU") no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-2xl font-bold mb-6">Credit Card Endorser</h1>
        <Elements stripe={stripe}>
          {/* <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Card Holder Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-purple-500"
                placeholder="First and Last Name"
                value={cardHolderName}
                onChange={handleCardHolderNameChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Card Information
              </label>
              {elements ? (
  <CardElement
    className="w-full px-3 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-purple-500"
    options={{
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }}
  />
) : (
  <div>Loading...</div>
)}

            
            </div>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" type="submit">
              Pay Now
            </button>
          </form> */}
          <a href="https://buy.stripe.com/4gw2cbcRd9vH8jm144" target="_blank" rel="noopener noreferrer">
    <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" type="button">
      Stripe
    </button>
  </a>
      </Elements>
        
        <div className="mt-4 flex justify-end items-center">
      <span className="text-sm text-black-500">Powered by</span>
      <img className="ml-2 h-6" src="https://stripe.com/img/v3/home/twitter.png" alt="Stripe" />
    </div>
      </div>
    </StripeSwipe>
    
  );
}

export default Payments;
