import React from 'react';

const MyOrderRow = ({service , refetch , index}) => {
      const {_id ,name , productName , quentity , price } = service
      // service delete ...............

      const deleteHundeler = () =>{

      }


      return (
            <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{productName}</td>
            <td>{quentity}</td>
            <td>{price}</td>
            <td><button class="btn btn-sm">Pay</button></td>
            <td><button onClick={deleteHundeler} class="btn btn-sm">Delete</button></td>
      </tr>
      );
};

export default MyOrderRow;