// import axios from 'axios'
import React from 'react'
import Casts from './Casts/Casts'
import Episodes from './Episodes/Episodes'
import Hero from './Hero/Hero'
import './Home.css'
// import Location from './Locations/Location'
import Locations from './Locations/Locations'
// import Spiral from './Spiral/Spiral'

const Home = () => {
  return (
    <>
      <section className='home-container'>
        <Hero />
        {/* <Spiral className='spiral' /> */}
        <Casts />
        <Episodes/>
        <Locations/>
      </section>
    </>
  )
}

export default Home
