import React, { useState, useEffect } from 'react'
import logo from './Cast-img/Logo.png'
import axios from 'axios'
import './AllCast.css'
import SingleCast from './SingleCast'

const AllCast = () => {
  const [casts, setCasts] = useState([])

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
  return (
    <>
      <section className='all-cast-container'>
        <div className='logo-container'>
          <img src={logo} alt='' />
        </div>
        {/* End of the Logo container section  */}
        <h1 className="section-title section-center  all-cast-title">The Casts </h1>
        <div className='all-casts section-center'>
          {casts.map((cast) => (
            <SingleCast key={cast.id} cast={cast} />
          ))}
        </div>
      </section>
    </>
  )
}

export default AllCast
