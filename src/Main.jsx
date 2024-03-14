import React from 'react';
import Map from './Map';
import './main.css';
import Search from './Search';
import { FaBell } from "react-icons/fa";
import { RiZoomInLine } from "react-icons/ri";
import { RiZoomOutLine } from "react-icons/ri";
import ButtonAdd from './ButtonAdd';
import Carousel from './Carousel';

import Layer from './Layer';
const Main = () => {
 

  return (
    <div className='main'>
      <Map  className="map_page" /> 
      <Search/>
      <ButtonAdd/>
      <div className='zoom'>
         <RiZoomInLine className='zoom_in' />
         <RiZoomOutLine className='zoom_out'/>
      </div>
      <Layer/>
      <Carousel/>
    </div>
  );
}


export default Main
