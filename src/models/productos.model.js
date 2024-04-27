import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: {type: String, required: true },
    precio: {type: Number, required: true}
}, {timestamps: true})

export default mongoose.model('productos', productosSchema)


