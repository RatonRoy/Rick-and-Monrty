import axios from 'axios'
import React, { useEffect } from 'react'

const Casts = () => {
  const url = 'https://rickandmortyapi.com/api/character'
  const fetchData = async () => {
    try {
      // axios.get(), axios.post(),axios.put(), axios.delete()
      const response = await axios(url)

      console.log(response.data.results)
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1> This is a cast page </h1>
    </div>
  )
}

export default Casts
