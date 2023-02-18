import React from 'react'
import title from '../HomeAsset/img/hero/hero-title.png'
import bubble from '../HomeAsset/img/New-Hero/bubble.png'
import gun from '../HomeAsset/img/New-Hero/Gun.png'
import topBar from '../HomeAsset/img/hero/topBar.png'
import portal from '../HomeAsset/img/hero/portal.png'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Logo from '../HomeAsset/img/Logo.png'
import './HeroFinal.css'

const HeroFinal = () => {
  return (
    <>
      <header className='hero-container'>
        <img src={bubble} alt='' className='bubble' />
        <section className='hero-title'>
          <img src={topBar} alt='' className='topBar' />
          <img src={portal} alt='' className='portal' />
          <img src={title} alt='' className='hero-title-img' />
        </section>
        <img src={gun} alt='' className='gun' />

        <section className='hero-footer'>
          <p className='hero-description'>
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
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

          {/* end of the btn section  */}
        </section>
      </header>
    </>
  )
}

export default HeroFinal
