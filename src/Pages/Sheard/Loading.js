import React from 'react';
import lodaing from '../../image/loadingSpiner.gif'

const Loading = () => {
      return (
            <div className=' h-screen flex justify-center item-center'>
                  <img src={lodaing} alt="" />
                  
            </div>
      );
};

export default Loading;