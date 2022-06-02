import React from 'react';
import logo1 from '../../image/logo-1.jpg'
import logo2 from '../../image/logo-2.jpg'
import logo3 from '../../image/logo-3.jpg'
import logo4 from '../../image/logo-4.jpg'
import logo5 from '../../image/logo-5.jpg'
import logo6 from '../../image/logo-6.jpg'

const Partner = () => {
      return (
            <div
            data-aos="zoom-in-right"
            data-aos-duration="3000"
            
            className='my-40 max-w-7xl m-auto px-3'>
                  <h1 className='text-3xl my-5 ptext'>Our Best Partners</h1>
                  <div className='grid lg:grid-cols-6 grid-cols-3'>

                  <div className='border'>
                       <img src={logo1} alt="" /> 
                  </div>
                  <div className='border'>
                  <img src={logo2} alt="" /> 
                  </div>
                  <div className='border'>
                  <img src={logo3} alt="" /> 
                  </div>
                  <div className='border'>
                  <img src={logo4} alt="" /> 
                  </div>
                  <div className='border'>
                  <img src={logo5} alt="" /> 
                  </div>
                  <div className='border'>
                  <img src={logo6} alt="" /> 
                  </div>

                  </div>
                  
            </div>
      );
};

export default Partner;