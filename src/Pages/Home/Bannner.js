import React from 'react';

const Bannner = () => {
      return (
            <div className=''>
                  <div class="hero min-h-screen">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                              <div className='flex-1 justify-center'>
                              <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                              </div>
                             
                              <div className='flex-1'>
                                    <h1 class="text-6xl font-bold">Box Office News!</h1>
                                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button class="btn btn-primary">Get Started</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Bannner;