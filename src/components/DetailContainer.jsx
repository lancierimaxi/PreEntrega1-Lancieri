import React from 'react'
import { useParams } from 'react-router-dom'

const DetailContainer = () => {
    const {id}=useParams()
  return (
    <div>DetailContainer</div>
  )
}

export default DetailContainer