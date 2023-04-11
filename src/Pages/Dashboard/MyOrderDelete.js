import React from 'react';
import toast from 'react-hot-toast';

const MyOrderDelete = ({deleteOrder , setDeleteOrder}) => {
      const {_id , name , productName} = deleteOrder

      const deleteOrderHendeler = () =>{
            fetch(`https://electic-bd-server-git-main-mamun2232.vercel.app/booking/${_id}` , {
                  method: "DELETE",
                  headers:{
                        'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`

                  }
            })
            .then(res => res.json())
            .then(data => {
                  if(data.deletedCount){
                        
                     
                    toast.success("Order Delete Successfull!")
                    setDeleteOrder(null)

                  }
               
            })
      }

      return (
            <div>

                 


                  <input type="checkbox" id="myOrderDelete" class="modal-toggle" />
                  <div class="modal">
                        <div class="modal-box relative">
                              <label for="myOrderDelete" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                              <h3 class="text-lg font-bold">Are You Sure {productName} Deleted?</h3>
                              <button className='btn' onClick={deleteOrderHendeler}>Confrom Delete</button>
                              
                        </div>
                  </div>
            </div>
      );
};

export default MyOrderDelete;