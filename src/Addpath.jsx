import React from 'react';
import './addpath.css';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layoutadd from './Layoutadd';


const Addpath = () => {
  return (
    <div className='add_path_container'>
        <MapContainer  style={{ height: "100%", width: "100%" }}  center={[34.7325,36.7367]} zoom={13} zoomControl={false} >
              <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
              {/* <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Esri"/> */}
        </MapContainer>
        <Layoutadd/>
    </div>
  )
}

export default Addpath
