import React from 'react';

const ContactUs = () => {
      return (
            <div className='my-30 max-w-7xl m-auto px-3'>
                  <h1 className='text-4xl my-6 text-center ptext'>Contact Us</h1>
                  <div className='grid grid-cols-1  lg:grid-cols-2 gap-20'>

                        <div>
                              <h2 className='text-4xl font-bold my-5 ptext'>Let's Chart</h2>
                              <p className='text-xl my-5 leading-8 p-read'>We Are Allways conneted to our client. its makes us understand the client requerment clearly. For that we can delever the best quality things to them. We beleive that listening to our client and make their requrments full is the untimate goal for us. Feel to contact us for more details.</p>
                        </div>
                        <div className='text-center'>
                              <div class="card  shadow-2xl ">
                                    <div class="card-body">
                                          <div class="form-control">
                                               
                                                <input type="text" placeholder="Email" class="input input-bordered" />
                                          </div>
                                          <div class="form-control">
                                               
                                                <input type="text" placeholder="Subject" class="input input-bordered" />
                                               
                                          </div>
                                          <div class="form-control">
                                              
                                                <textarea type="text" placeholder="Massage" class="input input-bordered h-40" />
                                               
                                          </div>



                                          <div class="form-control mt-6">
                                                <button class="btn bg-blue-800 text-white">Message</button>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>

            </div>
      );
};

export default ContactUs;