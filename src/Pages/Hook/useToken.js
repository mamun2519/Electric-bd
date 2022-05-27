import React, { useEffect, useState } from 'react';

const useToken = (user) => {
      console.log(user);
      // crete user token ..............
      const [token , setToken] = useState('')
      console.log(token);
      
      useEffect(()=>{
            const email = user?.user?.email
            const carrentUser = {email: email}

            if(email){
                  fetch(`https://vast-refuge-05190.herokuapp.com/user/${email}` ,{
                        method: "PUT",
                        headers:{
                              'content-type': 'application/json'
                        },
                        body: JSON.stringify(carrentUser)
                  })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        const accessToken = data.token
                        localStorage.setItem('accessToken' , accessToken)
                        setToken(data)
                  })

            }
          

      },[user])

      return [token , setToken]
      
};

export default useToken;