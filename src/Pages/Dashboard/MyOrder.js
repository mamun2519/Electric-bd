
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrderRow from './MyOrderRow';

const MyOrder = () => {
      const [user] = useAuthState(auth)
      const navigate = useNavigate()
      const [services , setService] = useState([])

      useEffect(() =>{
           fetch(`http://localhost:5000/booking/${user?.email}` ,{
             method: "GET" ,
             headers: {
                  'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
           })
           .then(res => {
                 if(res.status === 401 || res.status === 403){
                       signOut(auth)
                       localStorage.removeItem('accessToken')
                       navigate('/login')
                 }
                 
            
           return res.json()})
           .then(data => setService(data))
      },[services])
     
      return (
            <div>
                  <p className='text-xl'>My Order {services?.length}</p>
                  <div class="overflow-x-auto">
                        <table class="table w-full">
                            
                              <thead>
                                    <tr>
                                          <th>No</th>
                                          <th>Name</th>
                                          <th>Product Name</th>
                                          <th>Quentity</th>
                                          <th>Amount</th>
                                          <th>Payment</th>
                                          <th>Delete</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    
                                  {
                                        services?.map((service , index)=> <MyOrderRow
                                        key={service._id}
                                        service={service}
                                        
                                        index={index}
                                        ></MyOrderRow>)

                                  }
                                   
                              </tbody>
                        </table>
                  </div>


            </div>
      );
};

export default MyOrder;