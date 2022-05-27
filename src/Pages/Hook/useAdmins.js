import { useEffect, useState } from "react"


const useAdmins = (user) =>{

      const [admin , setAdmin] = useState(false)
      const [adminLoading , setAdminLoading] = useState(true)

      useEffect(()=>{
            const email = user?.email
            if(email){
                  fetch(`https://vast-refuge-05190.herokuapp.com/user/${email}`)
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setAdmin(data.admin)
                        setAdminLoading(false)
                  })
            }

      },[user])



      return [admin , adminLoading]
          
}

export default useAdmins