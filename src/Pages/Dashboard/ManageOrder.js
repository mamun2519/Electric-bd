import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheard/Loading';

const ManageOrder = () => {
      const { data: orders, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/manageOrder', {
            method: 'GET',
            headers: {
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
      }).then(res => res.json()));
      console.log(orders);


      if (isLoading) {
            return <Loading></Loading>
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
                                                <td>Unpaid</td>
                                                <td>Placed</td>
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