import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../Hook/useToken';

const Login = () => {
      const location = useLocation()
      let from = location.state?.from?.pathname || "/";
      const { register, formState: { errors }, handleSubmit } = useForm();
      const navigate = useNavigate()

      // create user hook
      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);
      
      // google login hook 
      const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

      const onSubmit = data => {
            signInWithEmailAndPassword(data.email , data.password)     
      };

      const [token] = useToken(user || Guser )
      

      let errorMessage;
      if(error || Gerror){
            errorMessage = <p className='text-red-500'>{error?.message  || Gerror?.message}</p>
      }
      if(token){
            navigate(from, { replace: true })
      }

      return (
            <div className='flex h-screen justify-center items-center'>
                  <div class="card w-96  shadow-xl bg-white">
                        <div class="card-body">
                              <h2 class="card-title text-center ptext">Login</h2>

                              <div className="register-from">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                         
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
                                          <input className='btn w-full max-w-xs bg-blue-800 text-white border-0' type="submit" value="Login" />
                                          {errorMessage}
                                          <p className='text-right mb-3 text-blue-600'>Forage Password</p>
                                         
                                    </form>
                                    <p className='text-center mt-2'>Are You new? <span className='text-blue-600 cursor-pointer' onClick={()=>navigate('/register')}>Please Register</span></p>
                              </div>

                              {/* socail-section  */}
                              <div className="socail-section">
                                    <div class="flex flex-col w-full border-opacity-50">

                                          <div class="divider ptext">OR</div>
                                          <button onClick={()=> signInWithGoogle()} class="btn btn-outline ptext ">google</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
)};

export default Login;