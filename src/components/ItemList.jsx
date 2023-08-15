import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <>
    {productos.map((p)=>{
      return(
        <Item
        key={p.id}
        nombre={p.nombre}
        imagen={p.imagen}
        description={p.description}
        precio={p.precio}
        stock={p.stock}
        
        />
      )
    })
    }
    </>
  )
}

export default ItemList