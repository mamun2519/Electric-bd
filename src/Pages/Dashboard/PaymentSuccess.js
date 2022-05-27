import React, { useEffect, useState } from 'react';

const PaymentSuccess = ({data , refetch}) => {
      const {_id} = data
      const [transeationId , setTransetionId] = useState([])
      useEffect(()=>{
            fetch(`http://localhost:5000/transetion/${_id}` , {
                  method: "GET"
            })
            .then(res => res.json())
            .then(data => {
                  console.log(data);
                  setTransetionId(data)
                  refetch()
            })
      },[transeationId])

      return (
            <div>
                  <div class="card w-auto bg-base-100 shadow-xl">
                        <div class="card-body">
                              <h2>Thank You</h2>
                              <p>Your Payment Successfull {transeationId}</p>
                        </div>
                  </div>
            </div>
      );
};

export default PaymentSuccess;