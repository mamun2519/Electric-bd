import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const VewReview = () => {
      const [reviews , setReview] = useState([])
      useEffect(()=>{
            fetch('https://vast-refuge-05190.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
      },[])
      return (
            <div className='my-20 max-w-7xl m-auto px-3'>
            <p className='text-xl pread'>All Review</p>
            <h1 className='text-3xl ptext'>Our Customer Say!</h1>

            <div className="review grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {
                       reviews.map(review => 
                        <ReviewCard
                        review={review}
                        
                        >

                        </ReviewCard>)
                  }
                

            </div>
           
      </div>
      );
};

export default VewReview;