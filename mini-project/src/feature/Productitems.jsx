import React from 'react'
import ProductData from './ProductData'

const Productitems = ({ products }) => {
    return (
        <>
            {products.length == 0 && <h1>No product fount</h1>}
            <div className='row'>
                {products.map((product, index) => <ProductData key={product.id} product={product}></ProductData>)}
            </div>
        </>
    )
}

export default Productitems
