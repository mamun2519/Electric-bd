import { signOut } from 'firebase/auth';

import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';


const Order = () => {
      const { register, formState: { errors }, handleSubmit } = useForm();
      const [user] = useAuthState(auth)
      const { id } = useParams()
      const [orderQuntity, setOrderQuentity] = useState(5)
      const navigate = useNavigate()

      const { data: service, isLoading, refetch } = useQuery(['/prodcut', id], () => fetch(`https://vast-refuge-05190.herokuapp.com/product/${id}`).then(res => res.json()))



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

     

      const onSubmit = data => {
            const name = data.name
            const email = data.email
            const productName = data.productName

            const quentity = data.quentity
            const price = parseInt(data.price) * parseInt(quentity)
            const number = data.number
            console.log(name, email, productName, quentity, price, number);

            if (parseInt(data.quentity) > parseInt(service.abalivaleQuentity)) {
                  toast.error("sorry qunetity very big")
                  return


            }
            else if (parseInt(data.quentity) < parseInt(service.minQuentity)) {
                  toast.error("sorry your quentity is very short")
                  return

            }

            else if (data.quentity < service?.abalivaleQuentity) {
                  const newAvailabeQuntity = parseInt(service?.abalivaleQuentity) - parseInt(data.quentity)
                  fetch(`https://vast-refuge-05190.herokuapp.com/products/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(
                              { newAvailabeQuntity }
                        ),
                        headers: {
                              'Content-type': 'application/json',
                        },
                  })
                        .then((response) => response.json())
                        .then(data =>  {
                             
                              refetch()
                        })

            }


            
            fetch('https://vast-refuge-05190.herokuapp.com/booking', {
                  method: "POST",
                  headers: {
                        'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify({
                        name,
                        email,
                        productName,
                        quentity,
                        price,
                        number
                  })
            })
                  .then(res => {
                        if (res.status === 401 || res.status === 403) {
                              signOut(auth)
                              localStorage.removeItem('accessToken')
                              navigate('/login')
                        }


                        return res.json()
                  })
                  .then(data => {
                        console.log(data);
                        // reset()
                        toast.success(data.message)
                      
                        

                  })

                  




      };






      return (
          
            <div className='max-w-7xl m-auto mt-20 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  <div class="card w-auto bg-white shadow-xl">
                        <figure>
                              <img className='my-img' src={service?.img} alt="Shoes" />
                        </figure>
                        <div class="card-body pt-2">
                              <h2 class="card-title">
                                    {service.name}
                                    <div class="badge bg-blue-100 text-black border-0">NEW</div>
                              </h2>
                              <p className='text-xl'>{service.comment}</p>
                              <p className='text-xl'>Minimun Quentity: {service.minQuentity}</p>
                              <p className='text-xl'>Avalible Quentity: {service.abalivaleQuentity}</p>
                              <p className='text-xl text-red-400 font-bold'>Price: ${service.price}</p>
                        </div>
                  </div>



                  {/* order from  */}
                  <div class="card w-auto bg-white shadow-xl sm:px-0">
                        <div class="card-body ">

                              <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* name  */}

                                    <div className='flex'>
                                          <div class="form-control w-full max-w-xs mr-4">
                                                <label class="label">
                                                      <span class="label-text">Name</span>
                                                </label>
                                                <input
                                                      value={user?.displayName}
                                                      {...register("name", {
                                                            required: {
                                                                  value: true,
                                                                  message: 'Name is Required'
                                                            }

                                                      })}

                                                      type="text" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                                                </label>
                                          </div>


                                          {/* email  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Email</span>
                                                </label>
                                                <input
                                                      value={user?.email}
                                                      {...register("email", {
                                                            required: {
                                                                  value: true,
                                                                  message: "Email is Required"
                                                            },

                                                      })}

                                                      type="text" placeholder="Enter Email" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}

                                                </label>
                                          </div>

                                    </div>

                                    <div className="flex ">

                                          {/* product name  */}
                                          <div class="form-control w-full max-w-xs mr-4">
                                                <label class="label">
                                                      <span class="label-text">Product Name</span>
                                                </label>
                                                <input
                                                      value={service?.name}
                                                      {...register("productName", {

                                                            required: {
                                                                  value: true,
                                                                  message: 'productNamis Required'
                                                            }

                                                      })}

                                                      type="text" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.productName?.type === 'required' && <span className='text-red-500'>{errors.productName.message}</span>}
                                                </label>
                                          </div>

                                          {/* price  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Price</span>
                                                </label>
                                                <input
                                                      value={service?.price}
                                                      {...register("price", {
                                                            required: {
                                                                  value: true,
                                                                  message: 'Price is Required'
                                                            }

                                                      })}

                                                      type="text" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.price?.type === 'required' && <span className='text-red-500'>{errors.price.message}</span>}
                                                </label>
                                          </div>

                                    </div>


                                    <div className="flex">

                                          {/* Quentity  */}
                                          <div class="form-control w-full max-w-xs mr-4">
                                                <label class="label">
                                                      <span class="label-text">MiniMum Quentity</span>
                                                </label>
                                                <input
                                                      {...register("quentity", {
                                                            required: {
                                                                  value: true,
                                                                  message: 'Quentity is Required'
                                                            }

                                                      })}
                                                      


                                                      type="number" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.quentity?.type === 'required' && <span className='text-red-500'>{errors.quentity.message}</span>}
                                                </label>
                                          </div>

                                          {/* number  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Number</span>
                                                </label>
                                                <input
                                                      {...register("number", {
                                                            minLength: {
                                                                  value: 11,
                                                                  message: 'Must be 11 Deget Type'
                                                            },
                                                            required: {
                                                                  value: true,
                                                                  message: 'Number is Required'
                                                            }

                                                      })}
                                                     

                                                      type="number" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.number?.type === 'minLength' && <span className='text-red-500'>{errors.number.message}</span>}
                                                      {errors.number?.type === 'required' && <span className='text-red-500'>{errors.number.message}</span>}
                                                </label>
                                          </div>


                                    </div>




                                    {/* submit */}
                                    <div className='text-center mt-4'>
                                          <input className='btn w-full max-w-xs bg-blue-800 text-white' type="submit" value="Confrom Order" />
                                    </div>


                              </form>

                        </div>
                  </div>
            </div>
      );
};

export default Order;