import { BrowserRouter, Routes, Route } from "react-router-dom"

import ProductosPage from "./pages/ProductosPage"
import { ProductoProvider } from "./context/productosContext"
import ProductosPrincipalPage from "./pages/ProductosPrincipalPage"

import Navbar from "./components/Navbar"
import CartCounter from "./pages/carritoPage"

function App() {
  return (
    <ProductoProvider>

      <BrowserRouter>

        <main className="container mx-auto px-10">
          <Navbar />
          <Routes>


            <Route path="/" element={<CartCounter />}></Route>

            <Route path="/productos" element={<ProductosPrincipalPage />}></Route>


            <Route path="/add-producto" element={<ProductosPage />}></Route>
            <Route path="/productos/:id" element={<h1>Actualizar producto</h1>}></Route>
            {/* <Route path="/add-producto" element={<h1>Home Page</h1>}></Route> */}


          </Routes>
        </main>

      </BrowserRouter>
    </ProductoProvider >




  )
}


export default App