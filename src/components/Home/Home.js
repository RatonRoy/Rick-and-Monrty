import axios from 'axios'
import React, { useEffect } from 'react'
import Background from '../../Media asset/Backgraund.png'
import './Home.css'

const Home = () => {
  return (
    <>
      <h2> This is a home page </h2>
      <div className='img-container'>
        <img src={Background} alt='' />
      </div>
    </>
  )
}

export default Home
