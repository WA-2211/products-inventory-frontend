import React from 'react'
import { useState, useEffect } from 'react'
import { getAllProducts } from '../services/product-services'
import { Link } from 'react-router'


function AllProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            try {

                const res = await getAllProducts()
                setProducts(res)
            } catch (err) {
                console.log(err)

            }
        }
        loadProducts()
    }, [])

    if (products.length === 0) return <p>No products to show yet</p>
    return (
        <div>
            <h1>AllProducts</h1>

            {products.map((oneProduct) =>
                <div key={oneProduct._id}>
                    <p>{oneProduct.title}</p>
                    <Link to={`/products/${oneProduct._id}`}>See Product Details</Link>

                </div>
            )}
        </div>
    )
}

export default AllProducts