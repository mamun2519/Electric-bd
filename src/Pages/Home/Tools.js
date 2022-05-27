import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Product from './Product'
import Service from './Service'


const Tools = () => {
      const navigate = useNavigate()
      const [tools , setTools] = useState([])
      useEffect(()=>{
            fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setTools(data))
      },[])
      const product = tools.slice(0 , 9)
      const newProduct = product.reverse()
      return (
            <div className='my-30'>
                  <h1 className='text-4xl text-black'>Our Tols</h1>
                  <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                             newProduct.map(tool => 
                             
                             <Service
                                    tool={tool}
                                   
                                    navigate={navigate}
                              
                              >

                              </Service>)
                        }
                  </div>
            </div>
      );
};

export default Tools;