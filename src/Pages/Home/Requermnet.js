import React, { useState } from 'react';

const Requermnet = () => {
      const [number , setNumber] = useState(0)
      
       const addNumber = () =>{
             setNumber(number + 1)
       }

       

      const mainesNumber = () =>{
            if(number > 0){
                  setNumber(number - 1)
            }
            else{
                  return 
            }
           
      }


      return (
            <div className='  max-w-7xl m-auto'>
                  <p>{number}</p>
                  <button onClick={addNumber}>+</button>
                  <button onClick={mainesNumber}>-</button>
            </div>
      );
};

export default Requermnet;