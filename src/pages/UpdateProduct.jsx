import React from 'react'
import { getByIdAndUpdate } from '../services/product-services'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { getProductById } from '../services/product-services'

function UpdateProduct() {

    const [formData, setFormData] = useState({
        title:'',
        description:'',
        category:'',
        price:'',
        quantity:''
    })

    const {id} = useParams()
    const navigate = useNavigate() 

    useEffect(()=>{

        async function loadProductDetails() {
            try {
                const res = await getProductById(id)
                setFormData(res)
            } catch (error) {
                console.log(error)
            }
        }
        loadProductDetails()
    },[])

        async function handleSubmit(event) {
        try {
            event.preventDefault()
            const updatedProduct = await getByIdAndUpdate(id, formData)
            navigate('/products')

        } catch (error) {

            console.log(error)
        }
    }
    
    async function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
  return (
    <div>
        <h1>Update Product</h1>
                    <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id='title' name='title' onChange={handleChange} value={formData.title}/>

                <label htmlFor="description">Description:</label>
                <input type="text" name='description' id='description' onChange={handleChange} value={formData.description} />

                <label htmlFor="category">Category:</label>

                <select name="category" id="category" onChange={handleChange} value={formData.category}>
                    <option value="electronics">electronics</option>
                    <option value="food">food</option>
                    <option value="clothing">clothing</option>
                    <option value="furniture">furniture</option>
                    <option value="other">other</option>
                </select>

                <label htmlFor="price">Price:</label>
                <input type="number" name='price' id='price' onChange={handleChange} value={formData.price}/>

                <label htmlFor="quantity">Quantity:</label>
                <input type="number" name='quantity' id='quantity' onChange={handleChange} value={formData.quantity}/>

                <button className='btn'>Update Product</button>

            </form>
    </div>
  )
}

export default UpdateProduct