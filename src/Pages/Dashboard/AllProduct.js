import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../Home/Service'
const AllProduct = () => {
      const navigate = useNavigate()
      const [products, setProduct] = useState([])
      useEffect(() => {
            fetch('https://electic-bd-server-git-main-mamun2232.vercel.app/product')
                  .then(res => res.json())
                  .then(data => setProduct(data))
      }, [])
      
     
      return (
            <div className='max-w-7xl m-auto px-3 my-10'>
                  <h1 className='text-4xl text-black mb-9 ptext'>Our All Tols</h1>
                  <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                              products.map(tool =>

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

export default AllProduct;