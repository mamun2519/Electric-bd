import React from 'react';
import CountUp from 'react-countup';
import { BsFillFlagFill } from 'react-icons/bs';

const BuisnessSumary = () => {

      return (
            <div>
                  <div className="sumarry text-center my-20">
                        <h1 className='text-4xl text-black'>MILIONS BUSINESS TRUST US</h1>
                        <p>TRY TO UNDERSTANd USERS EXPECATION</p>
                  </div>
                  <div className="sumarry-counter grid grid-cols-1 lg:grid-cols-4 gap-5">
                        <div class="card  shadow-xl">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center text-5xl'>< BsFillFlagFill className='' /></small>

                                          <p className='text-4xl my-3 font-bold'>
                                                <CountUp delay={1} start={0} end={81} />
                                          </p>
                                          <p className='text-2xl'>Countries</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-xl">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center text-5xl'>< BsFillFlagFill className='' /></small>

                                          <p className='text-4xl my-3 font-bold'>
                                                <CountUp delay={2} start={0} end={752} /> 
                                          </p>
                                          <p className='text-2xl'>Complete Project</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card  shadow-xl">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center text-5xl'>< BsFillFlagFill className='' /></small>

                                          <p className='text-4xl my-3 font-bold'>
                                                <CountUp delay={1} start={0} end={457} />
                                          </p>
                                          <p className='text-2xl'>Happy Client</p>
                                    </div>
                              </div>
                        </div>
                        <div class="card shadow-xl">
                              <div class="card-body">
                                    <div className='text-center'>
                                          <small className='text-center text-5xl'>< BsFillFlagFill className='' /></small>

                                          <p className='text-4xl my-3 font-bold'>
                                                <CountUp delay={1} start={0} end={123} />
                                          </p>
                                          <p className='text-2xl'>Wark Panding</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default BuisnessSumary;