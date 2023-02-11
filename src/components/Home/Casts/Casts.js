import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cast from '../Cast/Cast'
import './Casts.css'

const Casts = () => {
  const [casts, setCasts] = useState([])
  const [index, setIndex] = useState(0)

  const url = 'https://rickandmortyapi.com/api/character'
  const fetchData = async () => {
    try {
      // axios.get(), axios.post(),axios.put(), axios.delete()
      const response = await axios(url)

      console.log(response.data.results)
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
      <section className='casts-wrapper'>
        <button onClick={handlePrev} className='btn-cast btn-prev'>
          Prev
        </button>
        <div className='casts-container'>
          {casts.slice(index, index + 6).map((cast) => (
            <Cast key={cast.id} cast={cast}>
              {cast}
            </Cast>
          ))}
        </div>
        <button onClick={handleNext} className='btn-cast btn-next'>
          Next
        </button>
      </section>
    </>
  )
}

export default Casts
