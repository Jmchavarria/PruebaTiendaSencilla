import { useContext, createContext, useState } from "react";
import { createProductoRequest, getProductosRequest, deleteProductoRequest } from '../api/productos'

const ProductoContext = createContext()

export const useProductos = () => {
    const context = useContext(ProductoContext)
    if (!context) {
        throw new Error('Deberia estar en provider')
    }
    return context
}

export function ProductoProvider({ children }) {

    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([]) //NUEVO ESTADO PARA EL CARRITO




    const getProductos = async () => {
        const res = await getProductosRequest()
        try {
            console.log(res)
            setProductos(res.data)
        } catch (error) {
            console.error(error)
        }
    }


    const createProducto = async (producto) => {
        const res = await createProductoRequest(producto)
        console.log(res)
    }

    const deleteProducto = async (id) => {
        const res = await deleteProductoRequest(id)
        if (res.status === 204) setProductos(productos.filter(producto => producto._id !== id))
        console.log(res)
    }

    const añadirAlCarrito = (producto) => {
        setCarrito([...carrito, producto]) //AGREGAR EL PRODUCTO AL CARRITO
    }

    const limpiarCarrito = () => {
        setCarrito([])
    }



    return (
        <ProductoContext.Provider
            value={{
                productos,
                carrito, // Pasar el estado del carrito al contexto
                createProducto,
                getProductos,
                deleteProducto,
                añadirAlCarrito, // Pasar la función para agregar al carrito al contexto
                limpiarCarrito
            }}>

            {children}
        </ProductoContext.Provider>
    )
}
