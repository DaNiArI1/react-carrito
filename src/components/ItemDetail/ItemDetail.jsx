import React from 'react'
import Style from './ItemDetail.module.css'

const ItemDetail = ({product}) => (
    <div className={Style.detail}>
        <img src={product.image} alt={product.id} />
        <div>
            <h2>{product.name}</h2>
            <h2>{product.description}</h2>
            <h2>{product.price}</h2>
            <h2>{product.stock}</h2>
        </div>
    </div>
)

export default ItemDetail