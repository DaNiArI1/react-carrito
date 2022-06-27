import React from "react"
import ItemCount from "./itemCount"
import Style from "./Item.module.css"

function Item ({ id, name, image, stock}) {
    return (
        <div className={Style.container}>
            <h1>{name}</h1>
            <img src={image} alt={id} />
            <ItemCount stock={stock} />
        </div>
    )
}

export default Item