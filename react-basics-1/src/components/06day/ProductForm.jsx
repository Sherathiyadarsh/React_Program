import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    brand: '',
    category: '',
    stock: '',
    description: '',
    image: null
  });

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setShowAlert(true);
    } else {
      e.preventDefault();
      setShowAlert(false);
      console.log('Form submitted:', formData);
      // Add further processing here, such as sending data to a server
    }
    setValidated(true);
  };

  return (
    <Container>
      <h1>Product Form</h1>
      {showAlert && <Alert variant="danger">Please fill out all fields correctly.</Alert>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="productName">
          <Form.Label column sm="2">Product Name</Form.Label>
          <Col sm="10">
            <Form.Control
              required
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Enter product name"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a product name.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="productPrice">
          <Form.Label column sm="2">Product Price</Form.Label>
          <Col sm="10">
            <Form.Control
              required
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
              placeholder="Enter product price"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid product price.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="brand">
          <Form.Label column sm="2">Brand</Form.Label>
          <Col sm="10">
            <Form.Control
              required
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter brand"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a brand name.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="category">
          <Form.Label column sm="2">Category</Form.Label>
          <Col sm="10">
            <Form.Control
              required
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a category.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="stock">
          <Form.Label column sm="2">Stock</Form.Label>
          <Col sm="10">
            <Form.Control
              required
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
            />
            <Form.Control.Feedback type="invalid">
              Please provide the stock quantity.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="description">
          <Form.Label column sm="2">Description</Form.Label>
          <Col sm="10">
            <Form.Control
              required
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a description.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="image">
          <Form.Label column sm="2">Product Image</Form.Label>
          <Col sm="10">
            <Form.Control
              required
              type="file"
              name="image"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please upload a product image.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
