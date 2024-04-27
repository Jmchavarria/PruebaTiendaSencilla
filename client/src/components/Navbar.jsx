import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <h1 className="text-2xl font-bold"><Link to={'/'}>Agregados al carrito</Link></h1>
            <ul className="flex gap-x-2">
                <li>
                    <Link to={'/productos'}>Productos</Link>
                </li>
                <li>
                <Link to={'/add-producto'}>Crear producto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar