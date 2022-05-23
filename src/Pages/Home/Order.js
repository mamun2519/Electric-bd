import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Sheard/Loading';

const Order = () => {
      const { id } = useParams()
      const [order , setOrder] = useState(1)
      const { data, isLoading } = useQuery(['/prodcut', id], () => fetch(`http://localhost:5000/product/${id}`).then(res => res.json()))



      if (isLoading) {
            return <Loading></Loading>
      }
      
      // quentity decrease 
      const decreacseQouentity =() =>{
            let quentityOrder = order + 1
            setOrder(quentityOrder)
            
      }
      // quentity incrase 
      const incarseQuentity = () =>{

            if(order > 1){
             let quentityOrder = order - 1
             setOrder(quentityOrder)

            }
           
      }

      

    


      return (
            <div className='max-w-7xl m-auto mt-20 px-4'>
                  <div class="card lg:card-side  shadow-xl">
                        <figure>
                              <img className='myOrderImg' src={data?.img} alt="product" /></figure>
                        <div class="card-body ">
                              <h2 class="card-title text-3xl">Prodcut Name: {data?.name}</h2>
                              <span className='text-xl'>Decription: {data?.comment}</span>
                              <span className='text-xl'>Mimimun Orded Quentity: {data?.minQuentity} Psc</span>
                              <span className='text-xl'>Available Quentity: {data?.abalivaleQuentity} Psc</span>
                              <span className='text-xl font-bold'>Price: ${data?.price}</span>

                              {/* menimam quentity feild  */}

                              <div class="form-control mt-5">
                                    <label class="label">
                                          <span class="label-text">Enter Mimimun Quentity</span>
                                    </label>
                                    <label class="input-group">
                                         <button onClick={incarseQuentity} className='btn'>-</button>
                                          <input type="text" value={order} class="input input-bordered" />
                                          <button onClick={decreacseQouentity} className='btn'>+</button>
                                    </label>
                              </div>
                              <div class="card-actions justify-end">
                                    <button  disabled={order < 20} class="btn btn-primary">Confrom Order</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Order;