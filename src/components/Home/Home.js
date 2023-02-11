// import axios from 'axios'
import React from 'react'
import Casts from './Casts/Casts'
import Hero from './Hero/Hero'
import './Home.css'
// import Spiral from './Spiral/Spiral'

const Home = () => {
  return (
    <>
      <section className='home-container'>
        <Hero />
        {/* <Spiral className='spiral' /> */}
        <Casts />
      </section>
    </>
  )
}

export default Home
