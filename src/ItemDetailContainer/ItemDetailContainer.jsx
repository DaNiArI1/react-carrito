import React, {useState, useEffect} from 'react'
import { traerProduct } from '../components/utils/productos'

const ItemDetail = () => {
    const [product, setProduct] = useState ({})

    useEffect(() => {
        traerProduct()
        .then(resultado => setItem(resultado))
      }, [item])

      console.log (product)

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer