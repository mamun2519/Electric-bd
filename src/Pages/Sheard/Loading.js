import React from 'react';
import lodaing from '../../image/sppiner2.gif'

const Loading = () => {
      return (
            <div className=' h-screen flex justify-center item-center spiner'>
                  <img src={lodaing} alt="" />
                  
            </div>
      );
};

export default Loading;