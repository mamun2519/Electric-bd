import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ data }) => {
      const [cardEror, setCardError] = useState('')
      const stripe = useStripe();
      const elements = useElements();
      const [clientSecret, setClientSecret] = useState('')
      const [success, setSuccess] = useState('')
      const [transactionId, setTransactionId] = useState('');


      const { price, productName, email, name, _id } = data
      console.log(data);
      useEffect(() => {
            fetch('https://vast-refuge-05190.herokuapp.com/create-payment-intent', {
                  method: "POST",
                  headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify({ price })
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data?.clientSecret) {
                              setClientSecret(data.clientSecret)
                        }
                        console.log(data);
                  })
      }, [price])


      // hendeler 
      const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                  return
            }

            // read card information 
            const card = elements.getElement(CardElement);
            if (card === null) {
                  return
            }

            // emplemnt payment 
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card,
            });

            //     card error 
            if (error) {
                  setCardError(error?.message)
            }
            else {
                  setCardError('')

            }

            setSuccess('')

            // payment successfull method 
            const { paymentIntent, error: interntError } = await stripe.confirmCardPayment(
                  clientSecret,
                  {
                        payment_method: {
                              card: card,
                              billing_details: {
                                    email: email,
                                    name: name,

                              },
                        },
                  },
            );

            if (interntError) {
                  setCardError(interntError?.message)

            }
            else {
                  setCardError('')
                  setSuccess("Your Payment Successfull!")
                  console.log();
                  setTransactionId(paymentIntent?.id)

                  const payment = {
                        productId: _id,
                        transactionId: paymentIntent.id
                  }

                  fetch(`https://vast-refuge-05190.herokuapp.com/booking/${_id}`, {
                        method: 'PATCH',
                        headers: {
                              'content-type': 'application/json',
                              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(payment)
                  }).then(res => res.json())
                        .then(data => {

                              console.log(data);
                        })
            }








      }


      return (
            <>
                  <form onSubmit={handleSubmit}>
                        <CardElement
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

                        <div class="card-actions justify-end">
                              <button className='btn mt-14 bg-blue-800 text-white border-0' type="submit" disabled={!stripe || !clientSecret}>
                                    Pay
                              </button>
                        </div>
                  </form>
                  {
                        cardEror && <p className='text-red-500'>{cardEror}</p>
                  }
                  {
                        success && <div>
                              <p className='text-xl bg-green-500'>{success}</p>
                              <p className='text-xl bg-green-500'>Your transaction Id: {transactionId}</p>
                        </div>
                  }
            </>
      );
};

export default CheckoutForm;