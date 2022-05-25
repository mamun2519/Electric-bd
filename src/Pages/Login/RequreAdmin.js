import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmins from '../Hook/useAdmins';
import Loading from '../Sheard/Loading';

const RequreAdmin = ({children}) => {
      const [user , lodaing] = useAuthState(auth)
      const [admin , adminLoading] = useAdmins(user)
      const location = useLocation()

      if(lodaing || adminLoading){
            return <Loading></Loading>
      }

      if(!user || !admin){
            return <Navigate to="/login" state={{ from: location }} replace />;
      }
 

      return children
};

export default RequreAdmin;