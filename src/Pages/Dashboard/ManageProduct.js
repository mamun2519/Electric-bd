import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheard/Loading';
import ProductDelete from './ProductDelete';
import ProductRow from './ProductRow';

const ManageProduct = () => {
      const [productDelete , setProductDelete] = useState(null)
      const { data: product, isLoading, refetch } = useQuery('manageProduct', () => fetch('http://localhost:5000/manageProduct', {
            method: 'GET',
            headers: {
                  "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
      }).then(res => res.json()));

      if (isLoading) {
            return <Loading></Loading>
      }
      return (
            <div>
                  <p>Our Manage All Product {product?.length}</p>

                  <div>

                        <div class="overflow-x-auto">
                              <table class="table w-full">
                                  
                                    <thead>
                                          <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Avalible Quentity</th>
                                                <th>Minimin Quentity</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                        
                                         {
                                               product?.map((pro , index ) => <ProductRow
                                               key={pro._id}
                                               product={pro}
                                               refetch={refetch}
                                               index={index}
                                               setProductDelete={setProductDelete}
                                               
                                               >


                                               </ProductRow>)
                                         }
                                        
                                    </tbody>
                              </table>
                        </div>
                        {
                              productDelete && <ProductDelete
                              productDelete={productDelete}
                              setProductDelete={setProductDelete}
                              refetch={refetch}
                              
                              >

                              </ProductDelete>
                        }
                  </div>
            </div>
      );
};

export default ManageProduct;