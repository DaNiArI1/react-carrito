import { useEffect, useState } from "react"
import customFetch from "../utils/customFetch"
import ItemCount from "./itemCount"
import productos from "../utils/productos"
import ItemList from "./ItemList"


function ItemListContainer () {
  const [items, setItems] = useState([])

  useEffect(() => {
    customFetch(3000, productos)
    .then(resultado => setItems(resultado))
  }, [items])

  return (
    <div>
      <ItemList products= {items}/>
    </div>
  )
}

export default ItemListContainer