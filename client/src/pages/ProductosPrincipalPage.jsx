import { useEffect } from "react"
import { ProductoProvider, useProductos } from "../context/productosContext"
import ProductoCard from "../components/ProductoCard"


function ProductosPrincipalPage() {

    const { productos, getProductos } = useProductos()

    useEffect(() => {
        getProductos()
    }, [])

    if (productos.length === 0) return <h1>No hay productos</h1>
    return <div className="grid grid-cols-3 gap-2">
        {
            productos.map(producto => (
                <ProductoCard producto={producto} key={producto._id} />
            ))
        }

    </div>

}


export default ProductosPrincipalPage
