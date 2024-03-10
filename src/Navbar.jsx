import React, { useState } from 'react';
import './navbar.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import { SiChase } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import Dropmenu from './Dropmenu';


const Navbar = () => {
let [uptop , setupTop] = useState(100);
  function upDrop()
  {
      setupTop(70);
  }
  return (
    <>

    <div className='navbar'>
            <IoMdAddCircleOutline className='add_line' onClick={upDrop}/>
       
            <SiChase className='track'/>
            <FaBell className='bell'/>
            <FaMapMarkerAlt className='mark'/>
            <FaLayerGroup  className='layers' />
    </div>
   <Dropmenu topDrop={uptop} />
 
    </>
  )
}


export default Navbar
