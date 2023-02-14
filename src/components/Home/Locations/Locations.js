import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Location from './Location';
import './Locations.css';

const Locations = () => {
 const [locations, setLocations] = useState([])
 const [index, setIndex] = useState(0)
  const url = 'https://rickandmortyapi.com/api/location'

  const fetchData = async () => {
    try {
      // axios.get(), axios.post(),axios.put(), axios.delete()
      const response = await axios(url)

      // console.log(response.data.results)
      setLocations(response.data.results)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex + 1 >= locations.length ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex - 1 < 0 ? locations.length - 1 : prevIndex - 1
    )
  }
 return (
   <section className='section-center location-container'>
     <h2 className='section-title'>Locations</h2>
     <button onClick={handlePrev} className='btn-cast btn-prev location-prev'>
       <AiOutlineArrowLeft className='arrow-icon' />
     </button>
     <div className='locations'>
       {locations.slice(index, index + 4).map((location) => (
         <Location key={location.id} locationData={location}></Location>
       ))}
     </div>
     <button onClick={handleNext} className='btn-cast btn-next location-next'>
       <AiOutlineArrowRight className='arrow-icon' />
     </button>
   </section>
 )
};

export default Locations;