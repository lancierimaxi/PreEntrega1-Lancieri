import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <p className='text-center'>
            {greeting}
        </p>
    </div>
  )
}

export default ItemListContainer