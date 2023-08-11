import React from 'react'
import MyForm from '../MyFormComponent/MyForm'
import './Main.css'
import Products from '../ProductsComponent/Products'

export default function Main({products, addProduct, updateProduct, fillForm, currentProduct}) {
  return (
    <main>
      <Products products={products} fillForm={fillForm}></Products>
      <MyForm addProduct={addProduct} updateProduct={updateProduct} currentProduct={currentProduct}></MyForm>
    </main>
  )
}
  