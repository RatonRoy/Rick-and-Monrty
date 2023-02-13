import React from 'react';
import './Locations.css';


const Location = ({ locationData }) => {
 const {name, id} = locationData; 
  return (
   <article  className = 'location'>
    <p className="location-id"> # {id} </p>
    <h2 className="location-name"> {name} </h2>
   </article>
  )
}

export default Location;