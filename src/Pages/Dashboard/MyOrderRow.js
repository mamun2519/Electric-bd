import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import OrderDeleteModal from './OrderDeleteModal';

const MyOrderRow = ({ service,  index }) => {
      const navigate = useNavigate()
      const { _id, name, productName, quentity, price, email ,paid } = service

      // service delete ...............
      const payment = (id) =>{
            navigate(`/dashboard/payment/${id}`)
      }

      


      return (
            <>
                  <tr>
                        <th>{index + 1}</th>
                        <td>{name}</td>
                        <td>{productName}</td>
                        <td>{quentity}</td>
                        <td>${price}</td>
                        <td>
                              {(price && !paid) && <button onClick={()=>payment(_id)} class="btn btn-sm">Pay</button>}
                              {(price && paid) && <span>Paid</span>}
                              
                              </td>

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