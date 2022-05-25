import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const UpdateFofile = () => {
      const { register, formState: { errors }, handleSubmit } = useForm();
      const [user] = useAuthState(auth)
      const onSubmit = data => {
            const profile = {
                  name: data.name,
                  email: data.email,
                  number: data.number,
                  birthday: data.date,
                  age: data.age,
                  hometwon: data.hometown,
                  nationality: data.nationality,
                  education: data.education

            }
            fetch('http://localhost:5000/profile', {
                  method: "POST",
                  headers: {
                        'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(profile)
            })
                  .then(res => {
                        if (res.status === 401 || res.status === 403) {
                              signOut(auth)
                              localStorage.removeItem('accessToken')
                              Navigate('/login')
                        }


                        return res.json()
                  })
                  .then(data => {
                        console.log(data);
                        // reset()
                        toast.success(data.message)
                      
                        

                  })

            
            ;}
      return (
            <div>
                  <p>Do you want to Update your profile?</p>
                  <div class="card w-auto  shadow-xl">
                        <div class="card-body">
                              
                              <div className="lg:px-20">
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
                                                      <span class="label-text">Number</span>
                                                </label>
                                                <input
                                                     
                                                      {...register("number", {

                                                            required: {
                                                                  value: true,
                                                                  message: 'Number is Required'
                                                            }

                                                      })}

                                                      type="number" placeholder="Enter Number" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.number?.type === 'required' && <span className='text-red-500'>{errors.number.message}</span>}
                                                </label>
                                          </div>

                                          {/* price  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Date of Birth</span>
                                                </label>
                                                <input
                                                      
                                                      {...register("date", {
                                                            required: {
                                                                  value: true,
                                                                  message: 'Date is Required'
                                                            }

                                                      })}

                                                      type="date" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.date?.type === 'required' && <span className='text-red-500'>{errors.date.message}</span>}
                                                </label>
                                          </div>

                                    </div>


                                    <div className="flex">

                                          {/* Quentity  */}
                                          <div class="form-control w-full max-w-xs mr-4">
                                                <label class="label">
                                                      <span class="label-text">Age</span>
                                                </label>
                                                <input
                                                      {...register("age", {
                                                            required: {
                                                                  value: true,
                                                                  message: 'Age is Required'
                                                            }

                                                      })}
                                                      


                                                      type="number" placeholder="Enter Age" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.age?.type === 'required' && <span className='text-red-500'>{errors.age.message}</span>}
                                                </label>
                                          </div>

                                          {/* number  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Hometown</span>
                                                </label>
                                                <input
                                                      {...register("hometown", {
                                                           
                                                            required: {
                                                                  value: true,
                                                                  message: 'Hometown is Required'
                                                            }

                                                      })}
                                                     

                                                      type="text" placeholder="Enter Hometown" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.hometown?.type === 'required' && <span className='text-red-500'>{errors.hometown.message}</span>}
                                                      
                                                </label>
                                          </div>


                                    </div>
                                    <div className="flex">

                                          {/* Quentity  */}
                                          <div class="form-control w-full max-w-xs mr-4">
                                                <label class="label">
                                                      <span class="label-text">Nationality</span>
                                                </label>
                                                <input
                                                      {...register("nationality", {
                                                            required: {
                                                                  value: true,
                                                                  message: 'Nationality is Required'
                                                            }

                                                      })}
                                                      


                                                      type="text" placeholder="Enter Nationality" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.nationality?.type === 'required' && <span className='text-red-500'>{errors.nationality.message}</span>}
                                                </label>
                                          </div>

                                          {/* number  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Education Qualifiction</span>
                                                </label>
                                                <input
                                                      {...register("education", {
                                                           
                                                            required: {
                                                                  value: true,
                                                                  message: 'Education is Required'
                                                            }

                                                      })}
                                                     

                                                      type="text" placeholder="Enter Education Qualifiction" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {errors.education?.type === 'required' && <span className='text-red-500'>{errors.education.message}</span>}
                                                      
                                                </label>
                                          </div>


                                    </div>




                                    {/* submit */}
                                    <div className='text-center mt-4'>
                                          <input className='btn w-full max-w-xs' type="submit" value="Update profile" />
                                    </div>


                              </form>
                              </div>
                              
                             
                        </div>
                  </div>
            </div>
      );
};

export default UpdateFofile;