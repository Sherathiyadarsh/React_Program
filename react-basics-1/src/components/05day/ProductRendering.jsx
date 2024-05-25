import React from 'react'
import products from './Products'
const ProductRendering = () => {
    // console.log(products);
    return (
        <>
            {/* {products.map((product, i) => <h1>{JSON.stringify(product)}</h1>)} */}

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length == 0 && <tr><td className='App' colSpan={5}>Product not found</td></tr>}
                        {/* {products.map((product, i) =>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td><img src={product.image} width={50} height={50} alt=""/></td>
                            </tr>
                        )} */}
                        {/* {products.map((product, i) => {
                            return <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td><img src={product.image} width={50} height={50} alt="" /></td>
                            </tr>
                        }
                        )} */}

                        {products.map((product, i) => {
                            let { id, name, price, stock, image } = product
                            return <tr key={product.id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{stock}</td>
                                <td><img src={image} width={50} height={50} /></td>
                            </tr>
                        }
                        )}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ProductRendering