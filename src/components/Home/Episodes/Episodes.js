import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Episode from '../Episode/Episode'
import './Episodes.css'

const Episodes = () => {
  const [episodes, setEpisodes] = useState([])
  const [index, setIndex] = useState(0)

  const url = 'https://rickandmortyapi.com/api/episode'

  const fetchData = async () => {
    try {
      // axios.get(), axios.post(),axios.put(), axios.delete()
      const response = await axios(url)

      // console.log(response.data.results)
      setEpisodes(response.data.results)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex + 1 >= episodes.length ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex - 1 < 0 ? episodes.length - 1 : prevIndex - 1
    )
  }

  return (
    <>
      <section className='section-center episodes-container casts-web-devices'>
        <div className='section-header'>
          <h2 className='section-title'> Episodes </h2>
        </div>
        {/* end of the header section  */}
        <button onClick={handlePrev} className='btn-prev episode-prev'>
          <AiOutlineArrowLeft className='arrow-icon' />
        </button>
        {/* End of the next button  */}
        <div className='all-episodes'>
          {episodes.slice(index, index + 5).map((episode) => (
            <Episode key={episode.id} episodeData={episode}></Episode>
          ))}
        </div>
        {/* End of the all-episodes sections */}
        <button onClick={handleNext} className='btn-next episode-next'>
          <AiOutlineArrowRight className='arrow-icon' />
        </button>
      </section>
      {/* End of the Desktop markup  */}
      <section className='section-center episodes-container casts-tablet-devices'>
        <div className='section-header'>
          <h2 className='section-title'> Episodes </h2>
        </div>
        {/* end of the header section  */}
        <button onClick={handlePrev} className='btn-prev episode-prev'>
          <AiOutlineArrowLeft className='arrow-icon' />
        </button>
        {/* End of the next button  */}
        <div className='all-episodes'>
          {episodes.slice(index, index + 3).map((episode) => (
            <Episode key={episode.id} episodeData={episode}></Episode>
          ))}
        </div>
        {/* End of the all-episodes sections */}
        <button onClick={handleNext} className='btn-next episode-next'>
          <AiOutlineArrowRight className='arrow-icon' />
        </button>
      </section>

      {/* For mobile design  */}
      <section className='section-center episodes-container mobile-cast-wrapper'>
        <div className='section-header'>
          <h2 className='section-title'> Episodes </h2>
        </div>
        {/* end of the header section  */}
        <button onClick={handlePrev} className='btn-prev episode-prev'>
          <AiOutlineArrowLeft className='arrow-icon' />
        </button>
        {/* End of the next button  */}
        <div className='all-episodes'>
          {episodes.slice(index, index + 2).map((episode) => (
            <Episode key={episode.id} episodeData={episode}></Episode>
          ))}
        </div>
        {/* End of the all-episodes sections */}
        <button onClick={handleNext} className='btn-next episode-next'>
          <AiOutlineArrowRight className='arrow-icon' />
        </button>
      </section>
    </>
  )
}

export default Episodes
