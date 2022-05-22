import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
      const [reviews , setReview] = useState([])
      useEffect(()=>{
            fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
      },[])

      return (
            <div className='my-20'>
                  <p className='text-xl'>Review</p>
                  <h1 className='text-3xl'>Our Coustomer Say!</h1>

                  <div className="review grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {
                              reviews.map(review => 
                              <ReviewCard
                              review={review}
                              
                              >

                              </ReviewCard>)
                        }

                        

                  </div>
                 <div className='my-3 text-right'>
                 <button className='btn'>Vew all review..</button>
                 </div>
            </div>
      );
};

export default Review;