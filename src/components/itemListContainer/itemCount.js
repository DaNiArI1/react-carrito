import { useEffect, useState } from "react"
import Swal from "sweetalert2"


const ItemCount = ({ stock, initial, onAdd }) => {

  const [valorInicial, setCantidad] = useState(initial)
  const [stockArticulos, setStock] = useState(stock)

  return (
    <div className='centerCount'>

        <h2>Cantidad: {valorInicial}</h2>
      <div className='agregarItems'>

        {/* BOTON RESTAR */}
        <button type='button' className='btnCard' onClick={() => 
        {valorInicial > 1 && setCantidad(valorInicial - 1)}}>-</button>

         {/* Input indicador de cantidas seleccionada */}
        <input className='inputCard' value={valorInicial} />

      {/* BOTON SUMAR */}
         <button type='button' className='btnCard' onClick={() => 
          {valorInicial < stock && setCantidad(valorInicial + 1)}}>+</button>
        </div>

        {/* Boton agregar al carrito */}
            <button type='button' className='btnAddCar' onClick={addToCart}>Agregar al carrito</button>
    </div>
  )

  function addToCart(){
    if (stockArticulos - valorInicial >= 0){
        Swal.fire({
            title: "Compra Realizada",
            text: "Agregaste " + valorInicial + " productos al carrito",
            icon: "success",
            confirmButtonText: "Ok",})
        setStock(stockArticulos - valorInicial)
    }else if(valorInicial > stockArticulos){
        Swal.fire({
           title: "Error",
           text: "No puedes agregar mas de " + 5 + " productos al carrito",
           icon: "error",
           confirmButtonText: "Ok",})
    }
    }
}
export default ItemCount