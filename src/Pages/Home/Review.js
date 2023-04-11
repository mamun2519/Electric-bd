import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import { FaArrowCircleRight } from 'react-icons/fa';

const Review = () => {
      const navigate = useNavigate()
      const [reviews, setReview] = useState([])
      useEffect(()=>{
            fetch('https://electic-bd-server-git-main-mamun2232.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
      },[])
    
      const newReview = reviews.slice(0 , 6)
      
      

      return (
            <div className='my-20 max-w-7xl m-auto px-3'>
                  <p className='text-xl pread'>Review</p>
                  <h1 className='text-3xl ptext'>Our Customer Say!</h1>

                  <div className="review grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {
                              newReview.map(review => 
                              <ReviewCard
                              review={review}
                              
                              >

                              </ReviewCard>)
                        }
                      

                  </div>
                 <div className='my-3 text-right'>
                 <button onClick={()=> navigate('/allReview')} className='btn bg-blue-800 text-white'>Vew all review <FaArrowCircleRight className='mx-2'></FaArrowCircleRight></button>
                 </div>
            </div>
      );
};

export default Review;