import axios from './axios'


export const getProductosRequest = () => axios.get('/productos')


export const getProductoRequest = (producto) => axios.get(`/productos/${producto._id}`)

export const createProductoRequest = (producto) => axios.post('/productos', producto)


export const updateProductoRequest = (producto) => axios.put(`/productos/${producto._id}`, producto)


export const deleteProductoRequest = (id) => axios.delete(`/productos/${id}`)