import mongoose from "mongoose";


export const conexionDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://marlon05chavarria:MARLONCHAVARRIA3390@crudconnodejs.i3ybnzr.mongodb.net/pruebaTienda')
        console.log('Conexión exitosa a la DB 😁')
    }catch(error){
        console.log(error)
    }
}



