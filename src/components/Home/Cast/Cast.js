import React, { useState } from 'react'
import './Cast.css'

const Cast = ({ cast }) => {
  const { name, image } = cast

  return (
    <>
      <section className='cast-container'>
        <div className='img-container'>
          <img src={image} alt='' className='cast-img' />
        </div>
        <p className='cast-name'> {name} </p>
      </section>
    </>
  )
}

export default Cast

