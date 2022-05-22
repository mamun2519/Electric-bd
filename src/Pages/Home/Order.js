import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {

      return (
            <div className='max-w-7xl m-auto mt-20 px-4'>
                  <div class="card lg:card-side  shadow-xl">
                        <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album"/></figure>
                        <div class="card-body">
                              <h2 class="card-title">New album is released!</h2>
                              <p>Click the button to listen on Spotiwhy app.</p>
                              <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Listen</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Order;