import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Sheard/Loading';


const ManageOrder = () => {
      const [orders , setOrders] = useState([])
      useEffect(() =>{
            fetch('http://localhost:5000/manageOrder' ,{
                  method: "GET",
                  headers:{
                        'Content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                  }
            
            })
            .then(res => res.json())
            .then(data => setOrders(data))
            

      },[orders])
      // const { data: orders, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/manageOrder', {
      //       method: 'GET',
      //       headers: {
      //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
      //       }
      // }).then(res => res.json()));

     
      
    

      // if (isLoading) {
      //       return <Loading></Loading>


      // }
     
      // shippedHendeler 
      const shippedHendeler = (order) => {
           

            if(order?.paid){
               
                  console.log('cllick');
                  fetch(`http://localhost:5000/shipped/${order?._id}` , {
                        method: "PATCH",
                        headers: {
                              'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                  })
                  .then(res => res.json())
                  .then(data => {
                        
                        toast.success('Thanks You , Product Delevery Shepped!')
                      
                      
                        
                  })

            }
            else{
                  toast.error("sorry this is dont payment")
            }
            
           

      }
      
     

      return (
            <div>
                  <p>Total manage order {orders?.length}</p>

                  <div>

                        <div class="overflow-x-auto">
                              <table class="table w-full">
                                  
                                    <thead>
                                          <tr>
                                                <th>No</th>
                                                <th>Coustomer Name</th>
                                                <th>Item</th>
                                                <th>Amount</th>
                                                <th>Payment Status</th>
                                                <th>Order Status</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                         

                                         {
                                               orders?.map((order , index) => 
                                               <tr>
                                                <th>{index +1}</th>
                                                <th>{order.name}</th>
                                                <td>{order.productName}</td>
                                                <td>${order.price}</td>
                                                <td>{order.paid ? <p className='text-red-500'>Paid</p> : <p>Pending</p>}</td>




                                                <td>{
                                                      order.shipped ? <button class="btn btn-outline btn-success btn-xs">Shipped</button> : <button onClick={()=>shippedHendeler(order)} class="btn btn-xs">Please</button>
                                                      
                                                      }

                                                </td>
                                                <td><button class="btn btn-sm">Cancle</button></td>
                                          </tr> )
                                         }
                                          
                                        
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default ManageOrder;