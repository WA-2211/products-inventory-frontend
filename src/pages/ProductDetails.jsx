import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getProductById } from '../services/product-services'
import { getByIdAndDelete } from '../services/product-services'
import { Flex, Spin } from 'antd'

function ProductDetails() {

    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    

    useEffect(() => {
        async function loadProductDetails() {
            try {
                setLoading(true)
                setError(false)
                const res = await getProductById(id)
                setProduct(res)
                console.log(res)
            } catch (err) {
                console.log(err)
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        loadProductDetails()
    }, [])

    if(loading) return <Flex align='center' gap='medium' justify='center'>
        <Spin size='large' description='Loading...' />
    </Flex>

    if(error) return <p>ERROR: {error}</p>
    async function handleDelete() {
        try {
            await getByIdAndDelete(id)
            navigate('/products')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            {product && (
                <>
                    <h1>{product.title} Details</h1>
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>

                    <button onClick={handleDelete} className='btn'>Delete Product</button>
                    <button className='btn' onClick={() => {
                        navigate(`/products/${product._id}/edit`)
                    }}>Update Product</button>

                </>

            )}
        </div>
    )
}

export default ProductDetails