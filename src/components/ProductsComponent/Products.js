import React from 'react'
import Product from '../ProductComponent/Product'
import './Products.css'

export default function Products({products, fillForm}) { 
  return (
    <div id='productsContainer'>
        {products.map(product => {
            return <Product key={product.id} product={product} fillForm={fillForm}></Product>
        })}
    </div>
  )
}
