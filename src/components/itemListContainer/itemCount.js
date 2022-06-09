import { useEffect, useState } from "react"
import Swal from "sweetalert2"


const ItemCount = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial)

  useEffect(()=>{

  },[])

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const bajarContador = () => {
    setContador(contador - 1)
  }

  const confirmarContador = () => {
    if (contador >= 1 && contador <= 5) {
        Swal.fire({
            title: "Compra Realizada",
            text: "Agregaste " + contador + " productos al carrito",
            icon: "success",
            confirmButtonText: "Ok",})
    } else if (contador > 5) {
       Swal.fire({
           title: "Error",
           text: "No puedes agregar mas de 5 productos al carrito",
           icon: "error",
           confirmButtonText: "Ok",})
    }
   }

  return (
    <div>
      <p>El contador va : {contador}</p>
      <button onClick={aumentarContador}>Aumentar</button>
      <button onClick={bajarContador}>Disminuir</button>
      <button onClick={confirmarContador}>Confirmar</button>
    </div>
  )
}
export default ItemCount