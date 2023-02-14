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
      <section className='section-center episodes-container'>
        <div className='section-header'>
          <h2 className='section-title'> Episodes </h2>
        </div>
        {/* end of the header section  */}
        <button
          onClick={handlePrev}
          className='btn-cast btn-prev btn-prev-episode'
        >
          <AiOutlineArrowLeft className='arrow-icon' />
        </button>
        {/* End of the next button  */}
        <div className='all-episodes'>
          {episodes.slice(index, index + 4).map((episode) => (
            <Episode key={episode.id} episodeData={episode}></Episode>
          ))}
        </div>
        {/* End of the all-episodes sections */}
        <button onClick={handleNext} className='btn-cast btn-next'>
          <AiOutlineArrowRight className='arrow-icon' />
        </button>
      </section>
    </>
  )
}

export default Episodes
