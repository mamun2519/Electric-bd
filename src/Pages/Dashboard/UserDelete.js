import React from 'react';
import toast from 'react-hot-toast';

const UserDelete = ({ deleteDoctor , refetch , setDeleteDoctor}) => {
      const {_id , email} = deleteDoctor
   

      const deleteUserHendeler = () =>{
            fetch(`https://electic-bd-server-git-main-mamun2232.vercel.app/user/${_id}` , {
                  method: "DELETE",
                  headers:{
                        'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`

                  }
            })
            .then(res => res.json())
            .then(data => {
                  if(data.deletedCount){
                        
                        refetch()
                    toast.success("User Delete Successfull!")
                    setDeleteDoctor(null)

                  }
               
            })
      }

      return (
            <div>

                  


                  <input type="checkbox" id="userDelete" class="modal-toggle" />
                  <div class="modal">
                        <div class="modal-box relative">
                              <label for="userDelete" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                              <h3 class="text-lg font-bold">Are You Sure {email} user Delete?</h3>

                              <button onClick={deleteUserHendeler}  class="btn btn-sm">Delete</button>
                             
                             
                        </div>
                  </div>
            </div>
      );
};

export default UserDelete;