import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CastDetails = () => {
 const [cast, setCast] = useState()
 const url = 'https://rickandmortyapi.com/api/character'

 // data fetch function 
const fetchData = async () => {
  try {
    // axios.get(), axios.post(),axios.put(), axios.delete()
    const response = await axios(url)

    console.log(response.data.results)
    setCast(response.data.results)
  } catch (error) {
    console.log(error.response)
  }
}

 // end of the  data fetch function 

 // add the useEffect hook 
 useEffect(() => {
    fetchData()
 },[])

// const { name, image, status, species, origin, location, episode } = cast 
 return (
  <section className="cast-details-container">
   <div className="logo-container">
    <img src="" alt="" />
   </div>
   {/* end of the logo container  */}
   <div className="cast-details">
     <div className="img-container">
      <img src= {''} alt="" />
     </div>
     {/* End of the image container */}
     <div className="mid-line"></div>
     {/* End of the mid line div */}
     <div className="details-info">

     </div>
     {/* End of the details info section  */}
   </div>
  </section>
 );
};

export default CastDetails;