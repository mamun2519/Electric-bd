import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({user , index ,  refetch}) => {
      const {email , role} = user

      // make admin 

      const AdminHendeler = () =>{
            fetch(`http://localhost:5000/user/admin/${email}`, {
                  method: "PUT",
                  headers: {
                        'Content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
              
            })
                  .then(res => {
                        if (res.status === 403) {
                            toast.error("Make An Feild Admin")
                        }


                        return res.json()
                  })
                  .then(data => {
                        console.log(data);
                        if(data.modifiedCount > 0){
                              refetch()
                       
                        toast.success("Make Admin Successfull!")

                        }})
      }



      return (
            
                  <tr>
                        <th>{index + 1}</th>
                        <td>{email}</td>
                        <td>{role !== 'admin' ? <button onClick={AdminHendeler} class="btn btn-sm">Admin</button>
                        :
                      <small>Allredy Admin</small> 
                        
                  }</td>

                       
                        <td><button class="btn btn-sm">Remove</button></td>
                  </tr>
            
      );
};

export default UserRow;