import { Flex, Img } from '@chakra-ui/react'
import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const {category}=useParams()
const productos = [
  {id: 1,category: 1,nombre:"Producto A", imagen: <img src="img/productos/" alt="" /> ,description:"Descripcion de Producto A", precio: 100, stock:5},
  {id: 2,category: 1,nombre:"Producto B", imagen: <img src="img/productos/" alt="" /> ,description:"Descripcion de Producto B", precio: 200, stock:10},
  {id: 3,category: 1,nombre:"Producto C", imagen: <img src="img/productos/" alt="" /> ,description:"Descripcion de Producto C", precio: 300, stock:20},
  {id: 4,category: 2,nombre:"Producto D", imagen: <img src="img/productos/" alt="" /> ,description:"Descripcion de Producto D", precio: 100, stock:15},
  {id: 5,category: 2,nombre:"Producto E", imagen: <img src="img/productos/" alt="" />,description:"Descripcion de Producto E", precio: 200, stock:23},
  {id: 6,category: 2,nombre:"Producto F", imagen: <img src="img/productos/" alt="" />,description:"Descripcion de Producto F", precio: 300, stock:16},
  {id: 7,category: 3,nombre:"Producto G", imagen: <img src="img/productos/" alt="" />,description:"Descripcion de Producto G", precio: 100, stock:15},
  {id: 8,category: 3,nombre:"Producto H", imagen: <img src="img/productos/" alt="" />,description:"Descripcion de Producto H", precio: 200, stock:23},
  {id: 9,category: 3,nombre:"Producto I", imagen: <img src="img/productos/" alt="" /> ,description:"Descripcion de Producto I", precio: 300, stock:16}
]

const getProductos= new Promise((resolve, reject)=>{
  if (productos.lenght>0){
    setTimeout(()=>{
      resolve(productos)
    },2000)
  } else{
    reject(new Error("No hay datos"))
  }
})

getProductos
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })

  return (
    <Flex>
      <ItemList productos={productos} />
    </Flex>
  )
}

export default ItemListContainer