import React from 'react';

const UserRow = ({user , index}) => {
      const {email , role} = user
      return (
            
                  <tr>
                        <th>{index + 1}</th>
                        <td>{email}</td>
                        <td>{role !== 'admin' && <button class="btn btn-sm">Admin</button>}</td>
                        <td><button class="btn btn-sm">Remove</button></td>
                  </tr>
            
      );
};

export default UserRow;