import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './asset/Logo.png'
import Status from './asset/Icons/PNG/Status.png'
import Species from './asset/Icons/PNG/Species.png'
import Redirect from './asset/Icons/PNG/Redirect.png'
import Origin from './asset/Icons/PNG/origin.png'
import Location from './asset/Icons/PNG/Location.png'
import Gender from './asset/Icons/PNG/Gender.png'
import Episode from './asset/Icons/PNG/episodes.png'
import { GoLinkExternal } from 'react-icons/go'
import { Link } from 'react-router-dom'
import './CastDetails.css'
import EpisodesDetails from './EpisodesDetails'

const CastDetails = () => {
  const [cast, setCast] = useState({})
  // const [episodes, setEpisodes] = useState([])
  const url = 'https://rickandmortyapi.com/api/character/1'

  // data fetch function
  const fetchData = async () => {
    try {
      // axios.get(), axios.post(),axios.put(), axios.delete()
      const response = await axios(url)

      console.log(response.data)
      setCast(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }
  // end of the  data fetch function

  // episode  data fetch function

  // add the useEffect hook
  useEffect(() => {
    fetchData()
  }, [])
  // end of the useEffect hook for the cast data
  console.log(cast)
  console.log(cast)

  /*  useEffect(() => {
    fetchDataEpisode()
  }, []) */
  //  const oneCast = cast.slice(0, 1);
  //  console.log(oneCast);

  // const { name, image, status, species, origin, location, episode } = cast
  return (
    <section className='cast-details-container'>
      <div className='logo-container'>
        <img src={logo} alt='' className='logo-img' />
      </div>
      {/* end of the logo container  */}

      <div className='cast-details section-center'>
        <div className='cast-details-img-container'>
          <div className='img-name-cast-details-container'>
            <h2 className='cast-image-name'> {cast.name}</h2>
            <img src={cast.image} alt='' className='cast-details-img' />
          </div>
        </div>
        {/* End of the image container */}
        <div className='mid-line'></div>

        {/* End of the mid line div */}
        <article className='details-info'>
          <div className='primary-infos'>
            {/* single info  */}
            <div className='primary-info'>
              <img className='primary-img' src={Status} alt='' />
              <p> Status </p>
              <h2> {cast.status} </h2>
            </div>
            {/* single info end  */}
            {/* single info  */}
            <div className='primary-info'>
              <img className='primary-img' src={Species} alt='' />
              <p> Species </p>
              <h2> {cast.species} </h2>
            </div>
            {/* single info end  */}
            {/* single info  */}
            <div className='primary-info'>
              <img className='primary-img' src={Gender} alt='' />
              <p> gender</p>
              <h2> {cast.gender} </h2>
            </div>
            {/* single info end  */}
          </div>
          {/* End of the primary info  */}
          <div className='origin-container'>
            <div className='origin-info'>
              <img src={Origin} alt='' />
              <h3>Origin </h3>
              <h2 className='cast-origin-location-name'>
                {' '}
                {cast?.origin?.name || 'Earth (C-137)'}{' '}
              </h2>
            </div>
            {/* End of the origin info  */}
            <div className='origin-icon-container'>
              <Link to=''>
                <GoLinkExternal className='origin-icon' />
              </Link>
            </div>
          </div>
          {/* End of the origin container  */}
          <div className='location-container origin-container'>
            <div className='location-info'>
              <img src={Location} alt='' />
              <h3> Last Know Location </h3>
              <h2 className='cast-origin-location-name'>
                {' '}
                {cast?.location?.name || 'Citadel of Ricks'}{' '}
              </h2>
            </div>
            {/* End of the location info section  */}
            <div className='location-icon'>
              <Link to=''>
                <GoLinkExternal className='origin-icon' />
              </Link>
            </div>
          </div>
          {/* End of the location section  */}
          <div className='details-episodes-container'>
            <img src={Episode} alt='' />
            <h2 className='episode-name-details'> Episode(S) </h2>
            <div className='episodes-details-container'>
              <EpisodesDetails />
            </div>
          </div>
          {/* End of the episode section  */}
        </article>
        {/* End of the details info section  */}
      </div>
    </section>
  )
}

export default CastDetails
