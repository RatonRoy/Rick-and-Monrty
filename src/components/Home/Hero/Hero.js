import React from 'react'
import './Hero.css'
import Logo from '../HomeAsset/img/Logo.png'
import bubble from '../HomeAsset/img/New-Hero/bubble.png'
import Gun from '../HomeAsset/img/hero/Gun.png'
import pill from '../HomeAsset/img/hero/pill.png'
import portal from '../HomeAsset/img/hero/portal.png'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

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
          <div className='elements-mid'>
            <h2 className='hero-text'>
              <span className='morty-text'>MORTY</span>{' '}
              <span className='wiki-text'> WIKI </span>
            </h2>
            {/* <div className='gun-container'>
              <img src={Gun} alt='' />
            </div> */}
          </div>
          {/* end of the element mid section  */}
          <footer className='elements-footer'>
            <div className='hero-btn-container'>
              <Link to='https://www.youtube.com/watch?v=KQ9Cgdsa9tc&ab_channel=ONEMedia'>
                <button className='btn-hero'>
                  {' '}
                  <span className='btn-icon'>
                    {' '}
                    <AiOutlinePlayCircle />{' '}
                  </span>{' '}
                  Watch New
                </button>
              </Link>
            </div>
            {/* end of the btn section  */}
            <div className='hero-text-container'>
              <p className='hero-description'>
                Brilliant but boozy scientist Rick hijacks his fretful teenage
                grandson, Morty, for wild escapades in other worlds and
                alternate dimensions.
              </p>
            </div>
          </footer>
        </article>
        {/* End of the Gun  */}
      </section>
    </>
  )
}

export default Hero
