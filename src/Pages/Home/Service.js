import React from 'react';
import './custom.css'


const product = ({ tool , navigate}) => {
     

    
      const {_id,img , name , comment, minQuentity ,abalivaleQuentity , price} = tool
   
     
      return (
            <div class="card   shadow-xl bg-white">
                  <figure><img className='service-img' 

                   src={img} alt="tools" /></figure>
                  <div class="card-body">
                        <h2 class="card-title ptext">
                              {name}
                              <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='pread'>{comment}</p>
                        <p className='pread'>Minimun Quentity: {minQuentity}</p>
                        <p className='pread'>Avalible Quentity: {abalivaleQuentity}</p>
                        <p className='text-red-500 text-xl'>Price: ${price}</p>
                        {/* <div class="card-actions justify-end">
                              <div class="badge badge-outline">Fashion</div>
                              <div class="badge badge-outline">Products</div>
                        </div> */}
                        <button onClick={()=> navigate(`/order/${_id}`)} className='btn bg-blue-800 text-white'>Order</button>
                  </div>
            </div>
      );
};

export default product;