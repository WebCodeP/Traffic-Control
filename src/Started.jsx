import React from 'react';
import './started.css';
import { FaMapMarkerAlt } from "react-icons/fa";



const Started = () => {
  return (
    <div className='started_container'>
      <FaMapMarkerAlt className='site_icon'/>
      <div className='name_of_project'>Manage And Track Public Transportation</div>
      <div className='start'>
         <span></span>
         <span></span>
         <span></span>
      </div>
    </div>
  )
}

export default Started
