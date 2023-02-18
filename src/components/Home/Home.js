// import axios from 'axios'
import React from 'react'
import Casts from './Casts/Casts'
import Episodes from './Episodes/Episodes'
import Hero from './Hero/Hero'
import starOne from './HomeAsset/img/homebg/Star-24.png';
import starTwo from './HomeAsset/img/homebg/Star-23.png';
import starThree from './HomeAsset/img/homebg/Star-22.png';
import './Home.css'
// import Location from './Locations/Location'
import Locations from './Locations/Locations'
import Spiral from './Spiral/Spiral'
import HeroFinal from './HeroFinall/HeroFinal';
import Logo from './HomeAsset/img/Logo.png';

const Home = () => {
  return (
    <>
      <section className='home-container'>

        <div className='logo-container'>
          <img src={Logo} alt='Logo img' className='logo-img' />
        </div>
    
        <HeroFinal />
        <Spiral className='spiral' />
        <Casts />
   

        <div className='star-three'>
          <img src={starTwo} alt='' />
        </div>
        <Episodes />
        <div className='star-one'>
          <img src={starOne} alt='' />
        </div>
        <div className='star-two'>
          <img src={starThree} alt='' />
        </div>
        <Locations />

      </section>
    </>
  )
}

export default Home
