import { useForm } from 'react-hook-form'
import { useProductos } from '../context/productosContext'
import { useNavigate} from "react-router-dom";

function ProductosPage() {
    const { register, handleSubmit } = useForm()

    const { createProducto } = useProductos()
    const navigate = useNavigate()


    const onSubmit = handleSubmit((data) => {
        createProducto(data)
        navigate('/productos')
    })
    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>


            <form onSubmit={onSubmit}>
                <input type="text" {...register("nombre")} autoFocus placeholder='Nombre'
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />



                <textarea rows="3" placeholder='Descripcion' {...register("descripcion")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'></textarea>


                <input type="text" {...register("precio", { required: true })} placeholder='Precio'
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />

                <button type='submit' >
                    Crear
                </button>
            </form>


        </div>
    )
}

export default ProductosPage