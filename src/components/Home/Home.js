import axios from 'axios'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
// import Background from '../../Media asset/Backgraund.png'
import './Home.css'
import Spiral from './Spiral/Spiral'

const Home = () => {
  return (
    <>
      <section className='home-container'>
        <Hero />
        {/* <Spiral className='spiral' /> */}
      </section>
    </>
  )
}

export default Home
