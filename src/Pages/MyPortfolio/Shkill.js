import React from 'react';

const Shkill = () => {
      return (
            <div className='my-20'>
                  <p className='text-2xl'>My Skills</p>

                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                        <div class="card w-auto bg-base-100 shadow-xl">
                              <div class="card-body">
                                    <div className='grid grid-cols-2'>
                                    <div>
                                    <li>Html</li>
                                    <li>Css</li>
                                    <li>BootStarap</li>
                                    <li>Taliwaind</li>
                                    <li>JavaScript</li>
                                    <li>React js</li>
                                    <li>React Router</li>
                                    <li>Express Js</li>
                                    <li>Mongodb</li>
                                   
                                    </div>
                                    <div>
                                    <li>Node Js</li>
                                          <li>Firebase</li>
                                          <li>Firebase Hok</li>
                                  
                                          <li>Rechart</li>
                                          <li>Axios</li>
                                          <li>React Query</li>
                                          <li>React Hok from</li>
                                          <li>Json Web Token</li>
                                          <li>Stripe</li>
                                    </div>
                                    </div>
                                    
                              </div>
                        </div>

                       
                        <div class="card w-auto bg-base-100 shadow-xl">
                        <p className='text-xl mx-2'>My Warking Project</p>
                              <div class="card-body">
                                 <a href="https://to-do-app-254ba.web.app" target={'_blank'}>To Do App</a>

                                 <a href="https://walton-warehouse.web.app" target={'_blank'}>Walton WareHouse</a>

                                 <a href="https://gym-center-d1db7.web.app" target={'_blank'}>Gym Center</a>
                                    
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Shkill;