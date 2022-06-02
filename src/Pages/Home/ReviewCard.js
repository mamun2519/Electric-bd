import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';

const ReviewCard = ({ review }) => {
      const { name, img, comment, retings, country } = review
      return (
            <div
            data-aos="fade-right"
            data-aos-duration="3000"
            
            className='h-full'>
                  <div class="card   shadow-xl mt-20 bg-white">
                        <div class="card-body">
                              <div className='card-img flex'>
                                    <div class="avatar">
                                          <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ms-20">
                                                <img src={img} alt="" />
                                          </div>
                                    </div>
                                    <div className='mx-5'>
                                          <h3 className='text-2xl ptext'>{name}</h3>
                                          <p className='pread'>{country}</p>

                                    </div>
                              </div>
                              <p>Retings: {retings === 5 &&  <div class="rating rating-xs">
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                    </div>}

                                    {
                                          retings === 4 &&  <div class="rating rating-xs">
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          
                                    </div>
                                    }
                                    {
                                          retings === 3 &&  <div class="rating rating-xs">
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"/>
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          
                                          
                                    </div>
                                    }
                                    {
                                          retings === 2 &&  <div class="rating rating-xs">
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"/>
                                         
                                          
                                          
                                    </div>
                                    }
                                    {
                                          retings === 1 &&  <div class="rating rating-xs">
                                          <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                          
                                         
                                          
                                          
                                    </div>
                                    }

                                    
                                   
                              </p>
                              <p className='pread'>{comment}</p>
                              <div className='flex'>
                                    <span className='mt-1 text-blue-600 text-xl'><AiOutlineLike /> </span>
                                    <span className='mx-1 text-xl'>0</span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ReviewCard;