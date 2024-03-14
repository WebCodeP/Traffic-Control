import React from 'react';
import './layer.css';
import { FaLayerGroup } from "react-icons/fa";
const Layer = () => {
  return (
    <div className="layer_map">
    <FaLayerGroup  className='layer_icon'/>
    <div className='menu_layer'>
         <div className='title'><span>نوع الخريطة </span></div>
    </div>
  </div>
  )
}

export default Layer
