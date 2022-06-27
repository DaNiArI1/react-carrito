import { useEffect, useState } from "react"
import Swal from "sweetalert2"

function ItemCount({stock}) {

  const [count, setCount] = useState(0)

  function adding () {
    if (count < stock){
      setCount(count + 1)
    }
  }

  function subtracting () {
    if (count > 0){
      setCount(count - 1)
    }
  }
  return (
    <div>
      <button type='button' className='btnRestCar' onClick={subtracting}>-</button>
      <input className='inputCar' value={count} />
      <button type='button' className='btnAddCar' onClick={adding}>+</button>
    </div>
  )
}

export default ItemCount