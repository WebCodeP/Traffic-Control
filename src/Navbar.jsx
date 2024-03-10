import React from 'react';
import './navbar.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import { SiChase } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import Dropmenu from './Dropmenu';


const Navbar = () => {

  return (
    <>

    <div className='navbar'>

            <FaLayerGroup className='layers'/>
            <Dropmenu/>
            <SiChase className='track'/>
            <FaBell className='bell'/>
            <FaMapMarkerAlt className='mark'/>
            <IoMdAddCircleOutline className='add_line'/>
    </div>
 
    </>
  )
}


export default Navbar
