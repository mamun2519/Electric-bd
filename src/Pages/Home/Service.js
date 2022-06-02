import React from 'react';
import './custom.css'
import { FaArrowCircleRight } from 'react-icons/fa';


const product = ({ tool , navigate}) => {
     

    
      const {_id,img , name , comment, minQuentity ,abalivaleQuentity , price} = tool
   
     
      return (
            <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
             class="card   shadow-xl bg-white">
                  <figure><img className='service-img' 

                   src={img} alt="tools" /></figure>
                  <div class="card-body">
                        <h2 class="card-title ptext">
                              {name}
                              <div class="badge  bg-blue-100 text-black border-0">NEW</div>
                        </h2>
                        <p className='pread'>{comment}</p>
                        <p className='pread'>Minimun Quentity: {minQuentity}</p>
                        <p className='pread'>Avalible Quentity: {abalivaleQuentity}</p>
                        <p className='text-red-400 text-xl font-bold'>Price: ${price}</p>
                        {/* <div class="card-actions justify-end">
                              <div class="badge badge-outline">Fashion</div>
                              <div class="badge badge-outline">Products</div>
                        </div> */}
                        <button onClick={()=> navigate(`/order/${_id}`)} className='btn bg-blue-800 text-white'>Order <FaArrowCircleRight className='xl mx-2'></FaArrowCircleRight></button>
                  </div>
            </div>
      );
};

export default product;