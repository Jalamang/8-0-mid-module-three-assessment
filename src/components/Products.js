import React, { Component } from 'react'
import { ProductCard } from './ProductCard'


export class Products extends Component {

    render() {
        const { productData } = this.props
       const dispalyProducts = productData.map(product =>{
           return (<ProductCard key={product.id} product={product}/>)
       })
        return (
            <div className='products'>
                {dispalyProducts}
            </div>
        )
    }
}

export default Products
