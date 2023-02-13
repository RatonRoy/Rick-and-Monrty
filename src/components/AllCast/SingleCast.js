import React from 'react'
import './SingleCast.css'

const SingleCast = ({ cast }) => {
  const { name, image } = cast

  return (
    <div className='single-cast'>
      <img src={image} alt='' />
      <p className='single-cast-name'> {name} </p>
    </div>
  )
}

export default SingleCast
