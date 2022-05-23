import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';

const Order = () => {
      const [user] = useAuthState(auth)
      const { id } = useParams()
      const [orderQuntity, setOrderQuentity] = useState(5)
      const navigate = useNavigate()
      const { data, isLoading , refetch } = useQuery(['/prodcut', id], () => fetch(`http://localhost:5000/product/${id}`).then(res => res.json()))



      if (isLoading) {
            return <Loading></Loading>
      }

      // quentity decrease 
      const decreacseQouentity = () => {
            let quentityOrder = orderQuntity + 1
            setOrderQuentity(quentityOrder)

      }
      // quentity incrase 
      const incarseQuentity = () => {

            if (orderQuntity > 1) {
                  let quentityOrder = orderQuntity - 1
                  setOrderQuentity(quentityOrder)

            }
            else {
                  toast.error("sorry click possitive button")
            }

      }

      const orderHendeler = () => {
           
            const userName = user?.displayName
            const email = user?.email
            const booking = {
                  name: userName,
                  email: email,
                  productName: data?.name,
                  orderQuntity: orderQuntity,
                  price: data?.price
            }
          
            if (orderQuntity < data?.abalivaleQuentity) {
                  const newAvailabeQuntity = parseInt(data?.abalivaleQuentity) - parseInt(orderQuntity)
                  fetch(`http://localhost:5000/products/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(
                              {newAvailabeQuntity}
                        ),
                        headers: {
                              'Content-type': 'application/json',
                        },
                  })
                        .then((response) => response.json())
                        .then((json) => {
                              refetch()
                              // nestet api call 
                              fetch('http://localhost:5000/booking' ,{
                                    method: "POST",
                                    headers: {
                                          'Content-type': 'application/json',
                                          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                                    },
                                    body: JSON.stringify(booking)

                              })
                              .then(res => {
                                    if(res.status === 401 || res.status === 403){
                                          signOut(auth)
                                          localStorage.removeItem('accessToken')

                                          navigate('/login')
                                          

                                    }
                                    
                                    
                                    return res.json()})
                              .then(data => {
                                    console.log(data);
                                    toast.success(data.message)
                                    setOrderQuentity(5)
                              })
                        });

            }
            else {
                  toast.error("sorry qunetity very big")

            }



      }






      return (
            <div className='max-w-7xl m-auto mt-20 px-4'>
                  <div class="card lg:card-side  shadow-xl">
                        <figure>
                              <img className='myOrderImg' src={data?.img} alt="product" /></figure>
                        <div class="card-body ">
                              <h2 class="card-title text-3xl">Prodcut Name: {data?.name}</h2>
                              <span className='text-xl'>Decription: {data?.comment}</span>
                              <span className='text-xl'>Mimimun Orded Quentity: {data?.minQuentity} Psc</span>
                              <span className='text-xl'>Available Quentity: {data?.abalivaleQuentity} Psc</span>
                              <span className='text-xl font-bold'>Price: ${data?.price}</span>

                              {/* menimam quentity feild  */}

                              <div class="form-control mt-5">
                                    <label class="label">
                                          <span class="label-text">Enter Mimimun Quentity</span>
                                    </label>
                                    <label class="input-group">
                                          <button onClick={incarseQuentity} className='btn'>-</button>
                                          <input type="text" value={orderQuntity} class="input input-bordered" />
                                          <button onClick={decreacseQouentity} className='btn'>+</button>
                                    </label>
                              </div>
                              <div class="card-actions justify-end mt-10">
                                    <button onClick={orderHendeler} disabled={orderQuntity < 5} class="btn btn-primary">Confrom Order</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Order;