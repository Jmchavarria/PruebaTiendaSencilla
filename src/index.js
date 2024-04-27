import app from './app.js'
import { conexionDB } from './db.js'


conexionDB()


app.listen(3000)
console.log('Corriendo en el servidor', 3000)
