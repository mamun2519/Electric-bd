import React from 'react';
import toast from 'react-hot-toast';

const ProductDelete = ({productDelete , setProductDelete , refetch}) => {

      const {_id , name} = productDelete

      const productDeleteHendeler = () =>{
            fetch(`https://electic-bd-server-git-main-mamun2232.vercel.app/product/${_id}` , {
                  method: "DELETE",
                  headers:{
                        'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`

                  }
            })
            .then(res => res.json())
            .then(data => {
                  if(data.deletedCount){
                        
                        
                    toast.success("Product Delete Successfull!")
                    setProductDelete(null)
                    refetch()

                  }
               
            })

      }
      return (
            <div>
                  <div>




                        <input type="checkbox" id="productDelete" class="modal-toggle" />
                        <div class="modal">
                              <div class="modal-box relative">
                                    <label for="productDelete" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 class="text-lg font-bold">Are You Sure {name} Delete?</h3>

                                    <button onClick={productDeleteHendeler} class="btn btn-sm bg-red-500 text-white border-0">Delete</button>


                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductDelete;