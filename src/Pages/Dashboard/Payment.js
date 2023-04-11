import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Sheard/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
      const stripePromise = loadStripe('pk_test_51L1nmNCGpaTt0RU8npNSNITrjLTAUDjwjX275RD6RDk5SGoYi1H1zLKxAis8OFp4C0PxQBT2L5c0L0VsTI9ewqGl00dT2UHEXy');
      const { id } = useParams()
      const { data, isLoading } = useQuery(["payment", id], () => fetch(`https://electic-bd-server-git-main-mamun2232.vercel.app/bookings/${id}`, {
            method: "GET",
            headers: {
                  'Content-type': 'application/json',
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
      })
            .then(res => res.json()))

      if (isLoading) {
            return <Loading></Loading>
      }
      console.log(data);
      return (
            <div>
                  <p className='ptext text-xl my-3'>Please Payment</p>

                  

                  <div
                 data-aos="zoom-in"
                 data-aos-duration="4000"
                  
                  className='lg:flex justify-center mt-20'>
                        {/* card detils  */}
                        <div class="card w-96 bg-white shadow-xl lg:mx-3">
                              <div class="card-body">
                                    <h2 class="card-title text-2xl ptext">Hello {data.name},</h2>
                                    <p className='text-xl pread'> Pay For {data.productName}.</p>
                                    <p className='text-xl pread'>Your Order Quentity {data.quentity} Psc.</p>
                                    <p className='text-xl pread'>Please pay {data.price} Tk</p>

                              </div>
                        </div>

                        {/* card payment  */}
                        <div class="card w-96 bg-white shadow-xl">
                              <div class="card-body">
                                    <Elements stripe={stripePromise}>
                                          <CheckoutForm data={data} />
                                    </Elements>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Payment;