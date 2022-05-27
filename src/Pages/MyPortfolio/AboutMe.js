import React from 'react';
import myImage from '../../image/myimg-2.jpeg'
const AboutMe = () => {
      return (
            <div className='about grid grid-cols-1 lg:grid-cols-2 my-20'>

                  <div>
                  <img src={myImage} alt="" />
                  </div>
                  <div>
                        <p className='text-xl my-2'>Discover</p>
                        <h3 className='text-3xl'>About Me</h3>
                        <p className='my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit asperiores amet explicabo, unde molestias consequuntur maiores neque. Facilis, labore. Corporis?</p>

                        <div className='border p-5'>
                              <p className='text-xl mt-2'>Name: Juboraj Islam Mamun</p>
                              <p className='text-xl mt-2'>Phone: 01860700702</p>
                              <p className='text-xl mt-2'>Edecuation: BBS</p>
                              <p className='text-xl mt-2'>Collage: Hathazari Govet College</p>
                              <p className='text-xl mt-2'>Address: Wast Madarbari , Chittagong</p>
                              <p className='text-xl mt-2'>Age: 22</p>
                              <p className='text-xl mt-2'>Wark Experance: 6 month</p>
                              <p className='text-xl mt-2'>Email: Juborajvai22@gmail.com</p>
                              

                        </div>


                  </div>
                  
            </div>
      );
};

export default AboutMe;