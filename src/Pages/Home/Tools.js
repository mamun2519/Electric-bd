import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Product from './Product'
import Service from './Service'


const Tools = () => {
      const navigate = useNavigate()
      const [tools , setTools] = useState([])
      useEffect(()=>{
            fetch('data.json')
            .then(res => res.json())
            .then(data => setTools(data))
      },[])
      return (
            <div>
                  <h1 className='text-4xl text-black mb-5'>Our Tols</h1>
                  <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                              tools.map(tool => <Service
                                    tool={tool}
                                   
                                    navigate={ navigate}
                              
                              >

                              </Service>)
                        }
                  </div>
            </div>
      );
};

export default Tools;