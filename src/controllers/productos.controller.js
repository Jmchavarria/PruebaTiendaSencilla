import Productos from '../models/productos.model.js'

// OBTENER LOS PRODUCTOS
export const getProductos = async (req, res) => {
    const productos = await Productos.find()

    res.json(productos)
}


// CREAR UN PRODUCTO
export const createProducto = async (req, res) => {
    const { nombre, descripcion, precio } = req.body
    const newProducto = new Productos({
        nombre, descripcion, precio
    })
    const savedProducto = await newProducto.save()

    res.json(savedProducto)
}



// OBTENER UN PRODUCTO
export const getProducto = async (req, res) => {
    const producto = await Productos.findById(req.params.id)
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' })
    res.json(producto)
}



// ACTUALIZAR UN PRODUCTO
export const updateProducto = async (req, res) => {
    const producto = await Productos.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' })
    res.json(producto)
}




// ELIMINAR UN PRODUCT
export const deleteProducto = async (req, res) => {
    const producto = await Productos.findOneAndDelete(req.params.id)
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' })

    // EL 204 SIGINICA QUE TODO ESTUVO BIEN PERO NO DEVOLVERÁ NADA
    return res.sendStatus(204)

}