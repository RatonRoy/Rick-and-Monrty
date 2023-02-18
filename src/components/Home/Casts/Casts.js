import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cast from '../Cast/Cast'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleLeft } from 'react-icons/fa'
import './Casts.css'

const Casts = () => {
  const [casts, setCasts] = useState([])
  const [index, setIndex] = useState(0)

  const url = 'https://rickandmortyapi.com/api/character'
  const fetchData = async () => {
    try {
      // axios.get(), axios.post(),axios.put(), axios.delete()
      const response = await axios(url)

      // console.log(response.data.results)
      setCasts(response.data.results)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1 >= casts.length ? 0 : prevIndex + 1))
  }

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex - 1 < 0 ? casts.length - 1 : prevIndex - 1
    )
  }
  return (
    <>
      <section className='casts-wrapper casts-web-devices section-center'>
        <div className='casts-header'>
          <p className='text-header'> Meet The Cast </p>
          <button className='btn-all-cast'> View All </button>
        </div>
        <button onClick={handlePrev} className='cast-prev btn-prev'>
          <AiOutlineArrowLeft className='arrow-icon' />
        </button>
        <div className='casts-container'>
          {casts.slice(index, index + 6).map((cast) => (
            <Cast key={cast.id} cast={cast}>
              {/* {cast} */}
            </Cast>
          ))}
        </div>
        <button onClick={handleNext} className='cast-next btn-next'>
          <AiOutlineArrowRight className='arrow-icon' />
        </button>
      </section>
      {/* End of the desktop */}
      <section className='casts-wrapper casts-tablet-devices section-center'>
        <div className='casts-header'>
          <p className='text-header'> Meet The Cast </p>
          <button className='btn-all-cast'> View All </button>
        </div>
        <button onClick={handlePrev} className='cast-prev btn-prev'>
          <AiOutlineArrowLeft className='arrow-icon' />
        </button>
        <div className='casts-container'>
          {casts.slice(index, index + 3).map((cast) => (
            <Cast key={cast.id} cast={cast}>
              {/* {cast} */}
            </Cast>
          ))}
        </div>
        <button onClick={handleNext} className='cast-next btn-next'>
          <AiOutlineArrowRight className='arrow-icon' />
        </button>
      </section>
      {/* End of the tablet devices  */}

      {/* For mobile devices  */}
      <section className='casts-wrapper mobile-cast-wrapper section-center'>
        <div className='casts-header'>
          <div className='casts-header-container'>
            <p className='text-header'> Meet The Cast </p>
            <div className='angle-icons'>
              <FaAngleLeft />
              <FaAngleRight />
            </div>
          </div>
          <button className='btn-all-cast'> View All </button>
        </div>
        <button onClick={handlePrev} className='cast-prev btn-prev'>
          <AiOutlineArrowLeft className='arrow-icon' />
        </button>
        <div className='casts-container'>
          {casts.slice(index, index + 3).map((cast) => (
            <Cast key={cast.id} cast={cast}>
              {/* {cast} */}
            </Cast>
          ))}
        </div>
        <button onClick={handleNext} className='cast-next btn-next'>
          <AiOutlineArrowRight className='arrow-icon' />
        </button>
      </section>
    </>
  )
}

export default Casts
