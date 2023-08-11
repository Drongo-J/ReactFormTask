import { useState } from "react";
import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Main from "./components/MainComponent/Main";
import initialProducts from "./data/products";

var nextId = 6;
function App() {
  const [products, setProducts] = useState(initialProducts);
  const [currentProduct, setCurrentProduct] = useState(null);

  function addProduct(newProduct) {
    const newProductWithId = { ...newProduct, id: nextId++ };
    const newProducts = [...products, newProductWithId];
    setProducts(newProducts);
  }

  function updateProduct(updatedProduct) {
    console.log(updatedProduct);
    const updatedProducts = products.map((product) => {
      if (product.id === updatedProduct.id) {
        return { ...product, ...updatedProduct };
      }
      return product;
    });
  
    console.log(updatedProducts);
    setProducts(updatedProducts);
  }

  function fillForm(product) {
    setCurrentProduct(product);
  }

  return (
    <div>
      <Header></Header>
      <Main
        products={products}
        addProduct={addProduct}
        updateProduct={updateProduct}
        fillForm={fillForm}
        currentProduct={currentProduct}
      ></Main>
    </div>
  );
}

export default App;
