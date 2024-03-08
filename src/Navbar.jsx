import React from 'react';
import './navbar.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import { SiChase } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { PiPathBold } from "react-icons/pi";
import { FaCar } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className='navbar'>
            <FaLayerGroup className='layers'/>
            <SiChase className='track'/>
            <FaBell className='bell'/>
            <FaMapMarkerAlt className='mark'/>
            <IoMdAddCircleOutline className='add_line'/>
            <div className='drop_menu'>
                <div>
                  <PiPathBold className='path'/>
                  <p>path</p>
                </div>
                <div>
                  <FaCar className='car'/>
                  <p className='car_name'>car</p>
                </div>
            </div>
    </div>
  )
}

export default Navbar
