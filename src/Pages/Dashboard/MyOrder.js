
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrderDelete from './MyOrderDelete';
import MyOrderRow from './MyOrderRow';

const MyOrder = () => {
      const [user] = useAuthState(auth)
      const navigate = useNavigate()
      const [services , setService] = useState([])
      const [deleteOrder , setDeleteOrder] = useState(null)

      useEffect(() =>{
           fetch(`https://electic-bd-server-git-main-mamun2232.vercel.app/booking/${user?.email}` ,{
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
                  <p className='text-xl my-2 ptext'>My Order {services?.length}</p>
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
                                        setDeleteOrder={setDeleteOrder}
                                        
                                        index={index}
                                        ></MyOrderRow>)

                                  }
                                   
                              </tbody>
                        </table>
                  </div>

                  {
                        deleteOrder && <MyOrderDelete
                        deleteOrder={deleteOrder}
                        setDeleteOrder={setDeleteOrder}
                        
                        >

                        </MyOrderDelete>
                  }


            </div>
      );
};

export default MyOrder;