import React from 'react';
import { useState  } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

import 'leaflet-compass/dist/leaflet-compass.min.css';
import 'leaflet-compass/dist/leaflet-compass.min.js';



const Map = () => {

  const [center, setCenter] = useState([34.7325,36.7367]);

return (
  <div className='map'>
    <MapContainer style={{ height: "100%", width: "100%" }}  center={center} zoom={5} zoomControl={false} >
      <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        
      {/* <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Esri"/> */}
    
    </MapContainer>
</div>
 );
}


export default Map;