import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';
import UserRow from './UserRow';

const AllUser = () => {
      
      const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
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
                  <p>Our Total user {users?.length}</p>

                  <div>
                        <div class="overflow-x-auto">
                              <table class="table w-full">
                                    
                                    <thead>
                                          <tr>
                                                <th>No</th>
                                                <th>Email</th>
                                                <th>Make Admin</th>
                                                <th>Remove User</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                        
                                         {
                                               users?.map((user , index) => <UserRow
                                               
                                               key={user._id}
                                               user={user}
                                               index={index}
                                               refetch={ refetch}
                                               >

                                               </UserRow>)
                                         }
                                      
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default AllUser;