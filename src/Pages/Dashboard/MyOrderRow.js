import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import OrderDeleteModal from './OrderDeleteModal';

const MyOrderRow = ({ service,  index }) => {
      const navigate = useNavigate()
      const { _id, name, productName, quentity, price, email ,paid , transactionId} = service

      // service delete ...............
      const payment = (id) =>{
            navigate(`/dashboard/payment/${id}`)
      }

      


      return (
            <>
                  <tr>
                        <th>{index + 1}</th>
                        <td>{name}
                        {
                              transactionId &&   <small className='block'>Payment Transaction Id:</small>
                        }
                      
                        {transactionId ?  <small className='block'>{transactionId}</small> : <small className='block text-red-500'>Please Payment</small>} 
                       
                        
                        </td>

                        <td>{productName}</td>
                        <td>{quentity}</td>
                        <td>${price}</td>
                        <td>
                              {(price && !paid) && <button  onClick={()=>payment(_id)} class="btn btn-sm">Pay</button>}
                              {(price && paid) && <span>Paid</span>}
                             
                            
                              </td>

                              {/* <td>{transactionId ? <p>{transactionId}</p> : <p>Please sir Payment</p>}</td> */}

                        <td> <label for="deleteModal" disabled={paid}  class="btn btn-sm">delete</label></td>
                        
                  </tr>


                  <OrderDeleteModal
                  service={service}
                  >

                  </OrderDeleteModal>


            </>
      );
};

export default MyOrderRow;