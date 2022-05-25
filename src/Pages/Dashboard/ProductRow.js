import React from 'react';

const ProductRow = ({index, product}) => {
      const {name , price , minQuentity , abalivaleQuentity} = product
      
      return (
            <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{abalivaleQuentity}</td>
            <td>{minQuentity}</td>
            <td>{price}</td>
            <td>delete</td>
      </tr>
      );
};

export default ProductRow;