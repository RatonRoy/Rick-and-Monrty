import React from 'react'
import './Episode.css'

const Episode = ({ episodeData }) => {
  const { name, episode } = episodeData

  return (
    <div className='episode'>
      <p className='episode-text'> {episode} </p>
      <h2> {name} </h2>
    </div>
  )
}

export default Episode
