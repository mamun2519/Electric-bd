import React from 'react';
import toast from 'react-hot-toast';

const OrderDeleteModal = ({service}) => {
      const { _id, name, productName, quentity, price, email } = service

      const deleteHundeler = () => {
           
            fetch(`https://vast-refuge-05190.herokuapp.com/booking/${_id}`, {
                  method: "DELETE"
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.deletedCount  ) {
                              toast.success('Product delete successFull')
                        }
                        console.log(data);
                  })

      }
      return (
            <div>


                  <input type="checkbox" id="deleteModal" class="modal-toggle" />
                  <div class="modal">
                        <div class="modal-box relative">
                              <label for="deleteModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                              <h3 class="text-lg font-bold">Are You Sure {productName} Deleted?</h3>
                              {/* <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                              <button className='btn' onClick={ deleteHundeler}>Delete</button>
                        </div>
                  </div>
            </div>
      );
};

export default OrderDeleteModal;