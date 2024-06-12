import React from 'react'
import products from './Products.js'
import Productitems from './Productitems.jsx'
import { Container } from 'react-bootstrap'

const Productlist = () => {
  return (
    <>
      <Container>
        <Productitems products={products} />
      </Container>
    </>
  )
}

export default Productlist
