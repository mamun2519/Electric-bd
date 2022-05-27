import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import blanckProfile from '../../image/blankProfile.webp'

const Navber = () => {
      const [user] = useAuthState(auth)
      console.log(user);

      const manu = <>
            <li className='mx-1'><NavLink to='/'>Home</NavLink></li>
            {/* <li><a>Prodect</a></li>
            <li><a>Service</a></li> */}
            <li className='mx-1'>{user && <NavLink to='/dashboard'>Dashboard</NavLink>}</li>
            <li className='mx-1'><NavLink to='/login'>Login</NavLink></li>
            {/* <li><button onClick={() => signOut(auth)} className='btn'>Logout</button></li> */}
            <div class="dropdown dropdown-start">
                              
                              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                    <div class="w-10 rounded-full">
                                          {
                                                user?.photoURL ?  <img  src={user?.photoURL} /> : 
                                                  <img src={blanckProfile} /> 
                                          }
                                         
                                    </div>
                              </label>
                              <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                          <a class="justify-between">
                                                My Potfolio
                                          
                                          </a>
                                    </li>
                                    <li><a>{user?.displayName}
                                    <span class="badge">profile</span>
                                    </a></li>
                                    <li><a onClick={() => signOut(auth)}>Logout</a></li>
                              </ul>
                        </div>

      </>
      return (
            <div className='max-w-7xl m-auto'>
                  <div class="navbar text-black  sm:flex justify-between">
                  <div class="navbar-start">
                        <div class="dropdown">
                              <label tabindex="0" class="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {
                                          manu
                                    }
                                    

                              </ul>
                        </div>


                        <a class="btn btn-ghost normal-case text-xl">Manufacturer</a>
                  </div>
                  <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            {manu}
                        </ul>
                        

                  </div>
                 
                  {/* <label  class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                  <label for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                  

            </div>

            </div>


            
      );
};

export default Navber;