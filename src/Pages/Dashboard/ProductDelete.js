import React from 'react';
import toast from 'react-hot-toast';

const ProductDelete = ({productDelete , setProductDelete , refetch}) => {

      const {_id , name} = productDelete

      const productDeleteHendeler = () =>{
            fetch(`https://vast-refuge-05190.herokuapp.com/product/${_id}` , {
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

                                    <button onClick={productDeleteHendeler} class="btn btn-sm">Delete</button>


                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductDelete;