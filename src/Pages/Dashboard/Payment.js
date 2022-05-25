import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Sheard/Loading';

const Payment = () => {
      const { id } = useParams()
      const { data, isLoading } = useQuery(["payment", id], () => fetch(`http://localhost:5000/bookings/${id}`, {
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
                  <p>Please Payment {id}</p>

                  <div className='lg:flex justify-center'>
                        {/* card detils  */}
                        <div class="card w-96 bg-base-100 shadow-xl lg:mx-3">
                              <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-end">
                                          <button class="btn btn-primary">Buy Now</button>
                                    </div>
                              </div>
                        </div>

                        {/* card payment  */}
                        <div class="card w-96 bg-base-100 shadow-xl">
                              <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-end">
                                          <button class="btn btn-primary">Buy Now</button>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Payment;