import React, { useState } from 'react';
import Map from './Map';
import './main.css';
import Navber from './Navbar';
import Search from './Search';

import { RiZoomInLine } from "react-icons/ri";
import { RiZoomOutLine } from "react-icons/ri";
const Main = () => {
  let [zoom , setzoom] = useState(5);

  function zoomIn()
  {
    zoom +=1;
    setzoom(zoom);
  }
  return (
    <div className='main'>
      <Map zoom={zoom} className="map_page"/> 
      <Navber className="navbar_section"/>
      <Search/>
      <div className='zoom'>
         <RiZoomInLine className='zoom_in' onClick={zoomIn}/>
         <RiZoomOutLine className='zoom_out'/>
      </div>
    </div>
  );
}

export default Main
