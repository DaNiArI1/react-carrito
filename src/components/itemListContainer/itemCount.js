import { useEffect, useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial)

  useEffect(()=>{
    
    //console.log("Pidiendo usuarios...")

  },[])

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const bajarContador = () => {
    setContador(contador - 1)
  }

  const confirmarContador = () => {
    if (contador >= 1 && contador <= 5) {
        alert ("Se ha agregado " + contador + " producto(s) al carrito")
    } else if (contador > 5) {
        alert ("No hay stock suficiente")
    }
    else {
      alert("Error")
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