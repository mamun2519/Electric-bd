import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet,  } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmins from '../Hook/useAdmins';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMessageAltCheck } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import {  GrFormAdd } from 'react-icons/gr';
import {  MdProductionQuantityLimits } from 'react-icons/md';
import {  RiAdminLine } from 'react-icons/ri';


const Dashboard = () => {
      const [user] = useAuthState(auth)
      const [admin] = useAdmins(user)
      console.log(admin)
      return (
            <div className='dashborad  max-w-7xl m-auto'>
            <div class="drawer drawer-mobile">
                  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                  <div class="drawer-content mx-3">

                        <h1 className='text-3xl ptext font-bold text-center my-4'>Walcome to Our DashBoard</h1>


                        <Outlet />


                  </div>
                  <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-white text-base-content">
                              {/* <!-- Sidebar content here --> */}

                              {
                                    !admin && <>
                                    
                                     <li className='text-black'><NavLink to='MyOrder'><span className='inline-block'><AiOutlineShoppingCart></AiOutlineShoppingCart></span>My Order</NavLink></li>
                              <li className='text-black'><NavLink to='addReview'> <span className="inline-block">
                                    <BiMessageAltCheck></BiMessageAltCheck>
                                    </span> Add Review</NavLink></li>
                                    </>
                              }
                              
                             
                              <li className='ptext'><NavLink to='updateProfile'> <span className="inline-block"><CgProfile></CgProfile></span> My Profile</NavLink></li>
                             
                              
                              {
                                    admin && <>
                                  
                                    <li className='text-black'>
                                                <NavLink to='manageAllOrders'>
                                                     <span className="inline-block">
                                                      <AiOutlineAppstoreAdd/>
                                                      </span> Manage All Orders</NavLink></li>

                                                <li className='ptext'>
                                                <NavLink to='addProduct'>
                                                      <span className="inline-block">
                                                            <GrFormAdd/>
                                                      </span>
                                                      
                                                      Add Product</NavLink></li>
                                                <li className='ptext'>
                                                <NavLink to='manageAllprodcts'>
                                                      <span className="inline-block">
                                                            <MdProductionQuantityLimits/>
                                                      </span>
                                                      Manage All products</NavLink></li>

                                                <li className='ptext'>
                                                <NavLink to='user'>
                                                      <span className="inline-block">
                                                            <RiAdminLine/>
                                                      </span>
                                                      Make Admin</NavLink></li>
                                    
                                    
                                    
                                    </>
                              }


                                          
                                        


                                   
                              

                        </ul>

                  </div>
            </div>

      </div>
      );
};

export default Dashboard;