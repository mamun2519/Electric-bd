import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const Bannner = () => {
      const navigate = useNavigate()
      return (
            <div className=' mb-20'>
      
                  <div class="hero min-h-screen bannerDiv"  style={{}}>
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                              <div class="max-w-md">
                                    <h1 class="mb-5 text-4xl font-bold loading-6">Best Tols And Sales Available</h1>
                                    <p class="mb-5 text-base-800 text-xl">We have all kinds of tools here. In addtion there is a home delivery service.</p>
                                    <button onClick={()=> navigate('/allProduct')} class="btn bg-blue-800 text-white border-0">Bey Now <FaArrowCircleRight className='mx-2'></FaArrowCircleRight></button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Bannner;