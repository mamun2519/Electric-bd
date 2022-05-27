import React from 'react';

const ProductRow = ({index, product , setProductDelete}) => {
      
      const {name , price , minQuentity , abalivaleQuentity} = product
      
      return (
            <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{abalivaleQuentity}</td>
            <td>{minQuentity}</td>
            <td>{price}</td>
            <td><label onClick={()=> setProductDelete(product)} for="productDelete" class="btn btn-sm">Remove</label></td>
      </tr>
      );
};

export default ProductRow;