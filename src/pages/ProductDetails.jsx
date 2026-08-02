import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getProductById } from '../services/product-services'
import { getByIdAndDelete } from '../services/product-services'


function ProductDetails() {

    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function loadProductDetails() {
            try {
                const res = await getProductById(id)
                setProduct(res)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        loadProductDetails()
    }, [])


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

                    <button onClick={handleDelete}>Delete Product</button>
                    <button onClick={() => {
                        navigate(`/products/${product._id}/edit`)
                    }}>Update Product</button>

                </>

            )}
        </div>
    )
}

export default ProductDetails