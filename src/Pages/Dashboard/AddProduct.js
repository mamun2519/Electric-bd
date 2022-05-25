import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
      const { register, formState: { errors }, handleSubmit } = useForm();
      const imgStoreKey = 'dd0d57ec9218da7e664e48115a2ac81f'
      const onSubmit = data => {

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
                  const product = {
                     name: data.name,
                     price: data.price,
                     abalivaleQuentity: data.avalibleQuenttiy,
                     minQuentity: data.minimumQuentity,
                     img: picture,
                     comment: data.comment
                     
                  }
                  fetch('http://localhost:5000/product' , {
                        method: "POST",
                        headers:{
                              'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                  })

                  .then(res => {
                       
                       return res.json()})
                       .then(data => {
                             toast.success(data.message)
                             data.reset()
                       })
            })


      }
      return (
            <div>
                  <p>Please Add a New Product</p>

                  <div className='flex h-screen justify-center'>
                        <div class="card w-96 bg-base-100 shadow-xl">
                              <div class="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                          {/* name  */}

                                          
                                                <div class="form-control w-full max-w-xs mr-4">
                                                      <label class="label">
                                                            <span class="label-text">Product Name</span>
                                                      </label>
                                                      <input
                                                      
                                                            {...register("name", {
                                                                  required: {
                                                                        value: true,
                                                                        message: 'Product Name is Required'
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
                                                            <span class="label-text">Price</span>
                                                      </label>
                                                      <input
                                                           
                                                            {...register("price", {
                                                                  required: {
                                                                        value: true,
                                                                        message: "price is Required"
                                                                  },

                                                            })}

                                                            type="number" placeholder="Enter Price" class="input input-bordered w-full max-w-xs" />
                                                      <label class="label">
                                                            {errors.price?.type === 'required' && <span className='text-red-500'>{errors.price.message}</span>}

                                                      </label>
                                                </div>

                                      

                                          

                                                {/* product name  */}
                                                <div class="form-control w-full max-w-xs mr-4">
                                                      <label class="label">
                                                            <span class="label-text">Avalible Quentity</span>
                                                      </label>
                                                      <input
                                                          
                                                            {...register("avalibleQuenttiy", {

                                                                  required: {
                                                                        value: true,
                                                                        message: 'Avalible Quentity Required'
                                                                  }

                                                            })}

                                                            type="Number" placeholder="Enter Avalible Quenttiy" class="input input-bordered w-full max-w-xs" />
                                                      <label class="label">
                                                            {errors.avalibleQuenttiy?.type === 'required' && <span className='text-red-500'>{errors.avalibleQuenttiy.message}</span>}
                                                      </label>
                                                </div>

                                                {/* price  */}
                                                <div class="form-control w-full max-w-xs">
                                                      <label class="label">
                                                            <span class="label-text">Minimum Quentity</span>
                                                      </label>
                                                      <input
                                                           
                                                            {...register("minimumQuentity", {
                                                                  required: {
                                                                        value: true,
                                                                        message: 'MinimumQuentity is Required'
                                                                  }

                                                            })}

                                                            type="number" placeholder="Enter Minimun Quentity" class="input input-bordered w-full max-w-xs" />
                                                      <label class="label">
                                                            {errors.minimumQuentity?.type === 'required' && <span className='text-red-500'>{errors.minimumQuentity.message}</span>}
                                                      </label>
                                                </div>
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

                                                            type="file" placeholder="Enter Quentity" class="input input-bordered w-full max-w-xs" />
                                                      <label class="label">
                                                            {errors.pic?.type === 'required' && <span className='text-red-500'>{errors.pic.message}</span>}
                                                      </label>
                                                </div>

                                       


                                         

                                                {/* Quentity  */}
                                                <div class="form-control w-full max-w-xs mr-4">
                                                      <label class="label">
                                                            <span class="label-text">Decsription</span>
                                                      </label>
                                                      <textarea
                                                            {...register("comment", {
                                                                  required: {
                                                                        value: true,
                                                                        message: 'Decsription is Required'
                                                                  }

                                                            })}



                                                            type="text" placeholder="Enter Description" class="input input-bordered w-full h-20 max-w-xs textarea" />
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

export default AddProduct;