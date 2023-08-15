import { Flex } from '@chakra-ui/react'
import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
const [data, serData] = useState();
const { category } = useParams();
const productos = [
  {id: 1,category:"1" ,nombre:"Producto A", description:"Descripcion de Producto A", precio: 100, stock:5},
  {id: 2,category:"1" ,nombre:"Producto B", description:"Descripcion de Producto B", precio: 200, stock:10},
  {id: 3,category:"1" ,nombre:"Producto C", description:"Descripcion de Producto C", precio: 300, stock:20},
  {id: 4,category:"2" ,nombre:"Producto D", description:"Descripcion de Producto D", precio: 125, stock:5},
  {id: 5,category:"2" ,nombre:"Producto E", description:"Descripcion de Producto E", precio: 210, stock:10},
  {id: 6,category:"2" ,nombre:"Producto F", description:"Descripcion de Producto F", precio: 290, stock:20},
  {id: 7,category:"3" ,nombre:"Producto G", description:"Descripcion de Producto G", precio: 370, stock:5},
  {id: 8,category:"3" ,nombre:"Producto H", description:"Descripcion de Producto H", precio: 195, stock:10},
  {id: 9,category:"3" ,nombre:"Producto I", description:"Descripcion de Producto I", precio: 310, stock:20}
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

  useEffect(() => {
    getProductos.then((res) => {
      if (category) {
        productos(res.filter((item) => item.category === category));
      } else {
        productos(res);
      }
    });
  }, [category]);


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