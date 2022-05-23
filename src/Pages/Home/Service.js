import React from 'react';
import './custom.css'


const product = ({ tool , navigate}) => {
     

    
      const {_id,img , name , comment, minQuentity ,abalivaleQuentity , price} = tool
   
     
      return (
            <div class="card   shadow-xl">
                  <figure><img className='service-img' 

                   src={img} alt="tools" /></figure>
                  <div class="card-body">
                        <h2 class="card-title">
                              {name}
                              <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{comment}</p>
                        <p>Minimun Quentity: {minQuentity}</p>
                        <p>Avalible Quentity: {abalivaleQuentity}</p>
                        <p>Price: ${price}</p>
                        {/* <div class="card-actions justify-end">
                              <div class="badge badge-outline">Fashion</div>
                              <div class="badge badge-outline">Products</div>
                        </div> */}
                        <button onClick={()=> navigate(`/order/${_id}`)} className='btn'>Order</button>
                  </div>
            </div>
      );
};

export default product;