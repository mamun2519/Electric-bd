import React from 'react';

const ReviewCard = ({ review }) => {
      const { name, img, comment, retings, country } = review
      return (
            <div>
                  <div class="card   shadow-xl mt-20">
                        <div class="card-body">
                              <div className='card-img flex'>
                                    <div class="avatar">
                                          <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ms-20">
                                                <img src={img} alt="" />
                                          </div>
                                    </div>
                                    <div className='mx-5'>
                                          <h3 className='text-2xl'>{name}</h3>
                                          <p>{country}</p>

                                    </div>
                              </div>
                              <p>Retings: {retings}</p>
                              <p>{comment}</p>
                        </div>
                  </div>
            </div>
      );
};

export default ReviewCard;