import { useProductos } from "../context/productosContext"

function ProductoCard({ producto }) {

    const { deleteProducto, añadirAlCarrito } = useProductos()
    const handleAddToCart = () => {
        añadirAlCarrito(producto) // Llama a la función addToCart del contexto
    }
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text 2xl font-bold">{producto.nombre}</h1>

                <div className="flex gap-x-2 items-center">
                    <button onClick={() => {
                        deleteProducto(producto._id)
                    }}>
                        Eliminar
                    </button>

                    <button onClick={handleAddToCart}>
                        Añadir
                    </button>
                </div>
            </header>

            <p className="text-slate-300 font-bold">{producto.descripcion}</p>
            <h1>{producto.precio}</h1>
        </div>
    )
}

export default ProductoCard