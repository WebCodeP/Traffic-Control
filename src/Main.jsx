import React from 'react';
import Map from './Map';
import './main.css';
import Search from './Search';
import { FaBell } from "react-icons/fa";
import { RiZoomInLine } from "react-icons/ri";
import { RiZoomOutLine } from "react-icons/ri";
import ButtonAdd from './ButtonAdd';
import { FaLayerGroup } from "react-icons/fa";
import Carousel from './Carousel';
const Main = () => {
 

  return (
    <div className='main'>
      <Map  className="map_page"/> 
      <Search/>
      <ButtonAdd/>
      <div className='zoom'>
         <RiZoomInLine className='zoom_in' />
         <RiZoomOutLine className='zoom_out'/>
      </div>
      <div className="note">
         <FaBell className='icon_note'/>
         <span>0</span>
      </div>
       <div className="layer_map">
         <FaLayerGroup  className='layer_icon'/>
       </div>
      <Carousel/>
    </div>
  );
}

export default Main
