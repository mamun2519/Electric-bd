import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Sheard/Loading';

const Order = () => {
      const {id} = useParams()
      const {data , isLoading} = useQuery(['/prodcut' , id] ,() => fetch(`http://localhost:5000/product/${id}`).then(res => res.json()) )

      

      if(isLoading){
            return <Loading></Loading>
      }
      console.log(data);
    

      return (
            <div className='max-w-7xl m-auto mt-20 px-4'>
                  <div class="card lg:card-side  shadow-xl">
                        <figure>
                              <img className='myOrderImg' src={data?.img} alt="product"/></figure>
                        <div class="card-body ">
                              <h2 class="card-title">Prodcut Name: {data?.name}</h2>
                              <span className='my-0'>Decription: {data?.comment}</span>
                              <span className='my-0'>Mimimun Quentity: {data?.minQuentity}</span>
                              <span className='my-0'>Available Quentity: {data?.abalivaleQuentity}</span>
                              <span>Price: {data?.price}</span>
                              <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Listen</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Order;