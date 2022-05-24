import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Review = () => {
      const imgStoreKey = 'dd0d57ec9218da7e664e48115a2ac81f'
      const navigate = useNavigate()
      const [user] = useAuthState(auth)
      const { register, formState: { errors }, handleSubmit } = useForm();

      const onSubmit = data => {

            if(parseInt(data.retings) > 5){

                  toast.error("Sorry You Have Jast 1-5 retings")
                  return

            }

            const image = data.pic[0];
            const formData = new FormData();
            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
            fetch(url , {
                  method: "POST",
                  body: formData
            })
            .then(res => res.json())
            .then(result => {
                  // load img to imgdb website 
                  console.log(result);
                  const picture = result.data.url
                  const review = {
                     name: data.name,
                     country: data.from,
                     retings: data.retings,
                     img: picture,
                     comment: data.comment
                     
                  }
                  fetch('http://localhost:5000/review' , {
                        method: "POSt",
                        headers:{
                              'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)
                  })

                  .then(res => {
                        if(res.status == 401 || res.status === 403){
                              signOut(auth)
                              localStorage.removeItem('accessToken')
                              navigate('/login')

                        }
                       return res.json()})
                       .then(data => {
                             toast.success(data.message)
                             data.reset()
                       })
            })
            console.log(data);

      }
      return (
            <div>
                  <p>Hey {user?.displayName}! </p>
                  <p>Do you want to add a review?</p>

                  <div className='flex h-screen justify-center'>
                        <div class="card w-96 bg-base-100 shadow-xl">
                              <div class="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                          {/* name  */}

                                          
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
                                                            <span class="label-text">From</span>
                                                      </label>
                                                      <input
                                                           
                                                            {...register("from", {
                                                                  required: {
                                                                        value: true,
                                                                        message: "Form is Required"
                                                                  },

                                                            })}

                                                            type="text" placeholder="Enter Country Name" class="input input-bordered w-full max-w-xs" />
                                                      <label class="label">
                                                            {errors.from?.type === 'required' && <span className='text-red-500'>{errors.from.message}</span>}

                                                      </label>
                                                </div>

                                      

                                          

                                                {/* product name  */}
                                                <div class="form-control w-full max-w-xs mr-4">
                                                      <label class="label">
                                                            <span class="label-text">Retings</span>
                                                      </label>
                                                      <input
                                                          
                                                            {...register("retings", {

                                                                  required: {
                                                                        value: true,
                                                                        message: 'Retings Required'
                                                                  }

                                                            })}

                                                            type="Number" placeholder="Enter Reting Number" class="input input-bordered w-full max-w-xs" />
                                                      <label class="label">
                                                            {errors.retings?.type === 'required' && <span className='text-red-500'>{errors.retings.message}</span>}
                                                      </label>
                                                </div>

                                                {/* price  */}
                                                <div class="form-control w-full max-w-xs">
                                                      <label class="label">
                                                            <span class="label-text">Picture</span>
                                                      </label>
                                                      <input
                                                           
                                                            {...register("pic", {
                                                                  required: {
                                                                        value: true,
                                                                        message: 'Picture is Required'
                                                                  }

                                                            })}

                                                            type="file" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                                                      <label class="label">
                                                            {errors.pic?.type === 'required' && <span className='text-red-500'>{errors.pic.message}</span>}
                                                      </label>
                                                </div>

                                       


                                         

                                                {/* Quentity  */}
                                                <div class="form-control w-full max-w-xs mr-4">
                                                      <label class="label">
                                                            <span class="label-text">Comment</span>
                                                      </label>
                                                      <textarea
                                                            {...register("comment", {
                                                                  required: {
                                                                        value: true,
                                                                        message: 'Comment is Required'
                                                                  }

                                                            })}



                                                            type="text" placeholder="Enter Comment" class="input input-bordered w-full h-20 max-w-xs textarea" />
                                                      <label class="label">
                                                            {errors.comment?.type === 'required' && <span className='text-red-500'>{errors.comment.message}</span>}
                                                      </label>
                                                </div>

                                               


                                      




                                          {/* submit */}
                                          <div className='text-center mt-4'>
                                                <input className='btn w-full max-w-xs' type="submit" value="Submit" />
                                          </div>


                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Review;