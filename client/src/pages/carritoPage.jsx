import React, { useState, useEffect } from "react";
import { useProductos } from "../context/productosContext";

const CartCounter = () => {
    const { carrito, limpiarCarrito } = useProductos();
    const [valorIngresado, setValorIngresado] = useState(""); // Estado para almacenar el valor ingresado
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Actualizar el total cada vez que cambie el carrito
        setTotal(totalPagar());
    }, [carrito]);

    const totalPagar = () => {
        return carrito.reduce((total, producto) => total + producto.precio, 0);
    };

    const alerta = () => {
        alert('Compra exitosa !, vuelve la próxima');
        setValorIngresado(""); // Reiniciar el valor ingresado
        setTotal(0); // Reiniciar el total
        limpiarCarrito()


    };

    const accionDePagar = () => {
        const total = totalPagar();

        if (valorIngresado === "" || isNaN(parseFloat(valorIngresado))) {
            alert('Ingrese un valor válido')
        } else if (parseFloat(valorIngresado) !== total) {
            alert("Ingrese la cantidad correcta ")
        } else {
            alerta();
        }
    }

    return (
        <div className="cart-counter" style={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px' }}>
            <p style={{ color: 'black' }}>Productos en el carrito: {carrito.length}</p>
            <p style={{ color: 'black' }}>Total a pagar: ${total}</p>

            <div>
                <div>
                    <p style={{ color: 'blue' }}>Ingresar el valor a pagar:</p>
                </div>
                <div><input type="text" style={{ color: 'black', backgroundColor: 'transparent', borderBottom: '1px solid black', outline: 'none'}} value=
                    {valorIngresado} onChange={(e) => setValorIngresado(e.target.value)} /></div>
<br />
                <button onClick={accionDePagar} style={{backgroundColor: 'black', padding: '5px', borderRadius: '10px'}}>Pagar</button>
            </div>
        </div>
    );
};

export default CartCounter;
