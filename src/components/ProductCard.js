import React from 'react'

export const ProductCard = ({product}) => {
    
    return (
        <div>
           <h3>{product.name}</h3> 
           <div>{product.price}</div> 
           <img src={product.img} alt={product.name}/>
           <p>{product.description}</p>
        </div>
    )
}
export default ProductCard