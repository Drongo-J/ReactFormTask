import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Form, Input, Button, FormText } from "reactstrap";
import "./MyForm.css";

export default function MyForm({ addProduct, updateProduct, currentProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name);
      setPrice(currentProduct.price);
      setDescription(currentProduct.description);
      setImageUrl(currentProduct.imageUrl);
    }
  }, [currentProduct]);

  function validateForm() {
    if (!name || !price || !description || !imageUrl) {
      setError("Please fill out all fields.");
      return false;
    }
    setError(null);
    return true;
  }

  function getProductFromForm(){
    return {
      id: currentProduct.id,
      name: name,
      price: price,
      description: description,
      imageUrl: imageUrl,
    };
  }

  function resetForm() {
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
  }
  
  function handleAdd(e) {
    e.preventDefault();

    if (validateForm()) {
      var product = getProductFromForm();
      addProduct(product);
      resetForm();
    }
  }

  function handleUpdate(e) {
    e.preventDefault();

    if (validateForm()) {
      var product = getProductFromForm();
      updateProduct(product);
      resetForm();
    }
  }

  return (
    <Form className="p-5" id="form">
      <FormText className="form-title">Add Product Here</FormText>

      <FormGroup>
        <Input
          id="name"
          name="email"
          placeholder="Product Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </FormGroup>

      <FormGroup>
        <Input
          id="price"
          name="email"
          placeholder="Product Price"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          required
        />
      </FormGroup>

      <FormGroup>
        <Input
          id="description"
          name="text"
          type="textarea"
          placeholder="Product Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder="Product Image URL"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          required
        />
      </FormGroup>

      {error && <p className="error-message">{error}</p>}

      <Button className="w-100 form-btn" onClick={handleAdd}>
        Add
      </Button>
      <Button className="w-100 form-btn" onClick={handleUpdate}>
        Update
      </Button>
    </Form>
  );
}
