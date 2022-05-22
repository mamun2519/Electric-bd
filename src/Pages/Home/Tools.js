import React, { useEffect, useState } from 'react';
import Product from './Product'


const Tools = () => {
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
                              tools.map(tool => <Product
                                    tool={tool}
                              
                              >

                              </Product>)
                        }
                  </div>
            </div>
      );
};

export default Tools;