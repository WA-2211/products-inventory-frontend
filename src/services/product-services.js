import axios from "axios";


const api = axios.create({

    baseURL: `${import.meta.env.VITE_BACK_END_SERVER_URL}`

})




async function getAllProducts() {
    const res = await api.get('/products')
    return res.data    
}

async function createProduct(body){
    const res = await api.post('/products', body)
    return res.data
}


async function getProductById(id){
    const res = await api.get(`/products/${id}`)
    return res.data
}

async function getByIdAndDelete(id){
    const res= await api.delete(`/products/${id}`)
}

async function getByIdAndUpdate(id, body){
    const res = await api.put(`/products/${id}`, body)
    return res.data
}

export {
    getAllProducts, 
    createProduct,
    getProductById,
    getByIdAndDelete,
    getByIdAndUpdate

}