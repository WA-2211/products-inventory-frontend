import React from 'react'
import { useState, useEffect } from 'react'
import { getAllProducts } from '../services/product-services'
import { Link } from 'react-router'
import { Flex, Spin } from 'antd'

function AllProducts() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function loadProducts() {
            try {
                setLoading(true)
                setError(false)
                const res = await getAllProducts()
                setProducts(res)
            } catch (err) {
                console.log(err)
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        loadProducts()
    }, [])

    if(loading) return <Flex align='center' gap='medium' justify='center'>
        <Spin size='large' description='Loading...' />
    </Flex>
    if(error) return <p>ERROR: {error}</p>
    if (products.length === 0) return <p>No products to show yet</p>
    return (
        <div>
            <h1>AllProducts</h1>

            {products.map((oneProduct) =>
                <div key={oneProduct._id}>
                    <p>{oneProduct.title}</p>
                    <Link to={`/products/${oneProduct._id}`} id='Link'>See Product Details</Link>

                </div>
            )}
        </div>
    )
}

export default AllProducts