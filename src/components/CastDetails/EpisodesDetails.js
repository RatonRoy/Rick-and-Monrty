import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EpisodesDetails = () => {
  const [episodeDetails, setEpisodeDetails] = useState([])
  const url = 'https://rickandmortyapi.com/api/episode'

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      console.log(response.data.results)
      setEpisodeDetails(response.data.results)
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <ul className='details-episode-list-container' >
        {episodeDetails.map((episodeDetail) => (
          <li key={episodeDetail.id} className = 'details-episode-list' >{episodeDetail.name}</li>
        ))}
      </ul>
    </>
  )
}

export default EpisodesDetails
