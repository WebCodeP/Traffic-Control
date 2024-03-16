import React, { useState} from 'react';
import './addpath.css';
import { MapContainer, TileLayer ,Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js'
import Layoutadd from './Layoutadd';
import site from './assets/3d-map (2).png';
import { Icon } from 'leaflet';


const Addpath = () => {


const [place , setPlace] = useState(null);
// icon
const customIcon = new Icon({
  iconUrl:site,
  iconSize: [32, 32],
  });
//end icon

function addPoint()
{
  console.log("hhhdhhdhd");
}


  return (
    <div className='add_path_container'>
        <MapContainer  style={{ height: "100%", width: "100%" }}  center={[34.7325,36.7367]} zoom={13} zoomControl={false} onClick={addPoint}>
              <TileLayer   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
              {/* <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Esri"/> */}

             {place && <Marker className="type_car" position={place} icon={customIcon}></Marker>}
        </MapContainer>
        <Layoutadd/>
    </div>
  )
}

export default Addpath
