import express from 'express'
import morgan from 'morgan'

// IMPORTAMOS LAS RUTAS DEL ARCHIVO 
import productosRoutes from './routes/productos.routes.js'

import cors from 'cors'


const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(morgan('dev'))

// PARA QUE PERMITA CONVERTIR LOS REQ.BODY EN FORMATO JSON 
app.use(express.json())


app.use("/api", productosRoutes)

export default app