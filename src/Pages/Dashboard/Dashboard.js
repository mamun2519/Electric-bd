import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet,  } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmins from '../Hook/useAdmins';


const Dashboard = () => {
      const [user] = useAuthState(auth)
      const [admin] = useAdmins(user)
      return (
            <div className='dashborad  max-w-7xl m-auto'>
            <div class="drawer drawer-mobile">
                  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                  <div class="drawer-content mx-3">

                        <h1 className='text-4xl text-accent font-bold'>Walcome to Our DashBoard</h1>


                        <Outlet />


                  </div>
                  <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-white text-base-content">
                              {/* <!-- Sidebar content here --> */}
                              <li className='text-black'><NavLink to='MyOrder'>My Order</NavLink></li>
                              <li className='text-black'><NavLink to='addReview'>Add Review</NavLink></li>
                              <li className='text-black'><NavLink to='updateProfile'>My Profile</NavLink></li>
                             
                              
                              {
                                    admin && <>
                                    <li className='text-black'>
                                                <NavLink to='user'>Make Admin</NavLink></li>
                                    
                                    
                                    
                                    </>
                              }


                                          
                                        


                                   
                              

                        </ul>

                  </div>
            </div>

      </div>
      );
};

export default Dashboard;