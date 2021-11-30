import React, { Component } from 'react'

const Cart = (props) => {
    console.log(props)
    const {name, tax, subtotal, total, ProductSelected} = props 
        return (
            <div className='card'>
                <h3> Card</h3>
            </div>
        )
    }


export default Cart
