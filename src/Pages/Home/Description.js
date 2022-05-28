import React from 'react';
import sings from '../../image/singnecure.png'

const Description = () => {
      return (
            <div className='grid gird-cols-1 lg:grid-cols-2 gap-5 description my-40'>
                  <div cls> 
                        <h1 className='text-3xl my-3 ptext'>Our Capabilities</h1>
                        <p className='text-xl my-3 prad'>Stop by today; our talented staff will be happy to help you find what you’re searching for!</p>
                        <p className='text-xl pread'>CEO: Steven Rogers</p>
                       <div className='my-4'>
                       <img src={sings} alt="" />
                       </div>
                       <button className='btn bg-blue-800 text-white border-0'>Read More</button>



                  </div>
                  <div>
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium bg-white">
                                <p className="ptext">Why Buy From Us</p>

                              </div>
                              <div class="collapse-content bg-white">
                                    <p className='pread' >A personal and professional commitment to proactively protecting the well-being of our employees, our contractors, our customers and the people of the communities in which we operate.</p>
                              </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium bg-white">
                                    Sefty
                              </div>
                              <div class="collapse-content bg-white">
                                    <p className='pread'>A personal and professional commitment to proactively protecting the well-being of our employees, our contractors, our customers and the people of the communities in which we operate.</p>
                              </div>
                        </div>
                        <div tabindex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium bg-white">
                                    Quality
                              </div>
                              <div class="collapse-content bg-white">
                                    <p className='pread'>A personal and professional commitment to proactively protecting the well-being of our employees, our contractors, our customers and the people of the communities in which we operate.</p>
                              </div>
                        </div>
                        <div tabindex="2" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium bg-white">
                                    Why do we do it?
                              </div>
                              <div class="collapse-content bg-white">
                                    <p className='pread'>We are serious about our values. And in the context of those values we can tackle your whole project in a comprehensive customer focused way or a portion thereof.

We believe in building to positively impact communities, infrastructure, the economy, opportunity and employment. We take great pride in being proactive with our approach to projects, while ensuring that the best interests of the stakeholders are represented at every stage</p>
                              </div>
                        </div>
                        <div tabindex="3" class="collapse collapse-plus border border-base-300 rounded-box bg-white">
                              <div class="collapse-title text-xl font-medium">
                                    Why do we do it?
                              </div>
                              <div class="collapse-content bg-white">
                                    <p className='pread'>We are serious about our values. And in the context of those values we can tackle your whole project in a comprehensive customer focused way or a portion thereof.

We believe in building to positively impact communities, infrastructure, the economy, opportunity and employment. We take great pride in being proactive with our approach to projects, while ensuring that the best interests of the stakeholders are represented at every stage</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Description;