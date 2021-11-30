import React from 'react'

export const ProductCard = ({product}) => {
    
    return (
        <div>
           <h3>{product.name}</h3> 
           <h3>{product.price}</h3> 
           <img src={product.img} alt={product.name}/>
           <p>{product.description}</p>
        </div>
    )
}
