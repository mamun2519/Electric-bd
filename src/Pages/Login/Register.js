import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import useToken from '../Hook/useToken';

const Register = () => {
      const { register, formState: { errors }, handleSubmit } = useForm();
      const navigate = useNavigate()

      // create user hook
      const [
            createUserWithEmailAndPassword,
            Cuser,
            loading,
            Cerror,
          ] = useCreateUserWithEmailAndPassword(auth);
          // update fofile hook 
      const [updateProfile, updating, Uerror] = useUpdateProfile(auth);

      // google login hook 
      const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

      const onSubmit = async data => {
           await createUserWithEmailAndPassword(data.email , data.password)
           await updateProfile({displayName: data.name})
            
      };

      const [token] = useToken(Cuser || Guser )
     
      

      let errorMessage;
      if(Cerror || Uerror || Gerror){
            errorMessage = <p className='text-red-500'>{Cerror?.message || Uerror?.message || Gerror?.message}</p>
      }
      if(token ){
            navigate('/')
      }

      return (
            <div className='flex h-screen justify-center items-center'>
                  <div class="card w-96  shadow-xl bg-white">
                        <div class="card-body">
                              <h2 class="card-title text-center">Resgister</h2>

                              <div className="register-from">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                          {/* name  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Name</span>
                                                </label>
                                                <input 
                                                {...register("name" ,{
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
                                                {...register("email" , {
                                                      required:{
                                                            value: true,
                                                            message: "Email is Required"
                                                      },
                                                      pattern: {
                                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                            message: 'Provide a valid Email'
                                                      }
                                                })}
                                                
                                                type="text" placeholder="Enter Email" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                                                </label>
                                          </div>
                                          {/* password  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Password</span>
                                                </label>
                                                <input
                                                   {...register("password" , {
                                                      required:{
                                                            value: true,
                                                            message: "Password is Required"
                                                      },
                                                      minLength: {
                                                            value: 6,
                                                            message: 'Must be 6 characters or longer'
                                                      }
                                                })}
                                                
                                                type="text" placeholder="Enter Password" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                <label class="label">
                                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                                                </label>
                                                </label>
                                          </div>
                                         

                                          {/* submit */}
                                          <input className='btn w-full max-w-xs bg-blue-800 text-white border-0' type="submit" value="Regestion" />
                                          {errorMessage}
                                         
                                    </form>
                                    <p className='text-center mt-2'>All Ready Register? <span className='text-blue-600 cursor-pointer' onClick={()=>navigate('/login')}>Please Login</span></p>
                              </div>

                              {/* socail-section  */}
                              <div className="socail-section">
                                    <div class="flex flex-col w-full border-opacity-50">

                                          <div class="divider">OR</div>
                                          <button onClick={()=> signInWithGoogle()} class="btn btn-outline">google</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;