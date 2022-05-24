import React from 'react';
import toast from 'react-hot-toast';
import OrderDeleteModal from './OrderDeleteModal';

const MyOrderRow = ({ service,  index }) => {
      const { _id, name, productName, quentity, price, email } = service

      // service delete ...............

      


      return (
            <>
                  <tr>
                        <th>{index + 1}</th>
                        <td>{name}</td>
                        <td>{productName}</td>
                        <td>{quentity}</td>
                        <td>{price}</td>
                        <td><button class="btn btn-sm">Pay</button></td>
                        <td> <label for="deleteModal" class="btn btn-sm">delete</label></td>
                        
                  </tr>


                  <OrderDeleteModal
                  service={service}
                  >

                  </OrderDeleteModal>


            </>
      );
};

export default MyOrderRow;