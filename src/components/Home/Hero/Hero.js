import React from 'react'
import './Hero.css'
import Logo from '../HomeAsset/img/Logo.png'
import bubble from '../HomeAsset/img/New-Hero/bubble.png'
import Gun from '../HomeAsset/img/hero/Gun.png'
import pill from '../HomeAsset/img/hero/pill.png'
import portal from '../HomeAsset/img/hero/portal.png'

const Hero = () => {
  return (
    <>
      <section className='hero-container'>
        <div className='logo-container'>
          <img src={Logo} alt='Logo img' />
        </div>
        {/* End of the log section  */}
        <article className='hero-elements'>
          <header className='elements-header'>
            <div className='bubble-container'>
              <img src={bubble} alt=' Bubble img' />
              <h2 className='hero-text bubble-text'> THE</h2>
            </div>
            <div className='portal-container'>
              <img src={portal} alt='' />
            </div>
            <h2 className='hero-text rick-text'> RICK </h2>
            <div className='pill-container'>
              <img src={pill} alt='' />
              <h2 className='hero-text and-text'> & </h2>
            </div>
          </header>
          <div className='elements-mid'></div>
          <footer className='elements-f'></footer>
        </article>
      </section>
    </>
  )
}

export default Hero
