import React from 'react';
import CountUp from 'react-countup';
import { BsFillFlagFill } from 'react-icons/bs';
import { AiFillCustomerService } from 'react-icons/ai';
import { SiBitcoincash } from 'react-icons/si';
import {  IoIosPeople } from 'react-icons/io';
import { MdProductionQuantityLimits } from 'react-icons/md';

const BuisnessSumary = () => {

      return (
            <div className='my-40 max-w-7xl m-auto px-3'>
                  <div className="sumarry text-center my-20">
                        <h1 className='text-4xl ptext'>MILIONS BUSINESS TRUST US</h1>
                       
                        <p className='text-xl my-2 pread'>TRY TO UNDERSTANd USERS EXPECATION</p>
                  </div>
                  <div className="sumarry-counter grid grid-cols-1 lg:grid-cols-4 gap-5">
                        <div class="card  shadow-xl bg-white">
                              <div class="card-body text-center">
                                    <div className=''>
                                          <div className=' inline-block'>
                                          <small className=' text-5xl'>< AiFillCustomerService className='text-blue-800' /></small>
                                          </div>

                                          <p className='text-4xl my-3 font-bold'>
                                                <CountUp delay={5} start={0} end={670} />
                                          </p>
                                          <p className='text-2xl ptext'>served customers</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-xl bg-white">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center inline-block text-5xl'>< SiBitcoincash className='text-red-400' /></small>

                                          <p className='text-4xl my-3 font-bold'>
                                                <CountUp delay={2} start={0} end={120} />M
                                          </p>
                                          <p className='text-2xl ptext'>Annual revenue</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card  shadow-xl bg-white">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center text-5xl inline-block'>< IoIosPeople className='text-blue-800' /></small>

                                          <p className='text-4xl my-3 font-bold'>
                                                <CountUp delay={5} start={0} end={33} />K
                                          </p>
                                          <p className='text-2xl ptext'> Reviews</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-xl bg-white">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center text-5xl inline-block'>< MdProductionQuantityLimits className='text-red-400' /></small>

                                          <p className='text-4xl my-3 font-bold'>
                                                <CountUp delay={5} start={0} end={123} />
                                          </p>
                                          <p className='text-2xl ptext'>Tools</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default BuisnessSumary;