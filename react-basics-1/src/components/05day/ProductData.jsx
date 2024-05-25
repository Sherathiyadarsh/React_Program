import React from 'react'

const ProductData = ({ product }) => {
    return (
        <div className='col-3'>
            <div class="card">
                <img class="card-img-top" src={product.image} height={200} alt={product.name} />
                <div class="card-body">
                    <h4 class="card-title">{product.name}</h4>
                    <p class="card-text">{product.price}</p>
                    <p class="card-text">{product.stock}</p>
                    <button type="button" class="btn btn-primary">Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default ProductData
