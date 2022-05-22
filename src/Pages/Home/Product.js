import React from 'react';

const product = ({ tool }) => {
    
      const {img , name , comment, minQuentity ,abalivaleQuentity , price} = tool
      return (
            <div class="card   shadow-xl">
                  <figure><img src={img} alt="tools" /></figure>
                  <div class="card-body">
                        <h2 class="card-title">
                              {name}
                              <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{comment}</p>
                        <p>Minimun Quentity: {minQuentity}</p>
                        <p>Avalible Quentity: {abalivaleQuentity}</p>
                        <p>Price: ${price}</p>
                        <div class="card-actions justify-end">
                              <div class="badge badge-outline">Fashion</div>
                              <div class="badge badge-outline">Products</div>
                        </div>
                  </div>
            </div>
      );
};

export default product;