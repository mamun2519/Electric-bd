import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Sheard/Loading';


const ManageOrder = () => {
      const [orders, setOrders] = useState([])
      useEffect(() => {
            fetch('https://vast-refuge-05190.herokuapp.com/manageOrder', {
                  method: "GET",
                  headers: {
                        'Content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                  }

            })
                  .then(res => res.json())
                  .then(data => setOrders(data))


      }, [orders])

      const shippedHendeler = (order) => {


            if (order?.paid) {

                  console.log('cllick');
                  fetch(`https://vast-refuge-05190.herokuapp.com/shipped/${order?._id}`, {
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
            else {
                  toast.error("sorry this is dont payment")
            }
      }

      // order delete 
      const orderDeleteHendeler = (id) => {
            fetch(`https://vast-refuge-05190.herokuapp.com/booking/${id}`, {
                  method: "DELETE",
                  headers: {
                        'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  }
            })
                  .then(res => res.json())
                  .then(data => {

                        toast.success('Thanks You , delete Successfull')



                  })


      }




      return (
            <div>
                  <p className='text-xl my-3 ptext'>Total manage order {orders?.length}</p>

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
                                                orders?.map((order, index) =>
                                                      <tr>
                                                            <th>{index + 1}</th>
                                                            <th>{order.name}</th>
                                                            <td>{order.productName}</td>
                                                            <td>${order.price}</td>
                                                            <td>{order.paid ? <p className='text-green-500'>{order.paid}</p> : <p>unpaid</p>}</td>




                                                            <td>{
                                                                  <button onClick={() => shippedHendeler(order)} class="btn btn-outline btn-success btn-xs">Shipped Now</button>

                                                            }

                                                            </td>
                                                            <td><button onClick={() => orderDeleteHendeler(order?._id)} class="btn btn-xs bg-red-500 text-white border-0">Cancle</button></td>
                                                          
                                                            
                                          
                                                      </tr>)








                                          }

                                        

                                        
                                   


                              </tbody>
                        </table>
                  </div>
            </div>

                  {/* modal  */ }

                 


            </div >
      );
};

export default ManageOrder;