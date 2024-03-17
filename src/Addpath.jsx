import React, { useState ,useRef} from 'react';
import './addpath.css';
import { MapContainer, TileLayer ,Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js'
import Layoutadd from './Layoutadd';
import site from './assets/3d-map (2).png';
import { Icon } from 'leaflet';


const Addpath = () => {

const mapRef = useRef(null);
const [point ,setPoint ] = useState([]);
// icon
const customIcon = new Icon({
  iconUrl:site,
  iconSize: [32, 32],
  });
//end icon
if(mapRef.current){
  mapRef.current.on("click",(event)=>{

     const newarray =[event.latlng.lat,event.latlng.lng];
     setPoint([...point,newarray]);
  });
}


  return (
    <div className='add_path_container'>
        <MapContainer ref={mapRef}  style={{ height: "100%", width: "100%" }}  center={[34.7325,36.7367]} zoom={13} zoomControl={false} >
              <TileLayer   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
              {/* <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Esri"/> */}

             {point && point.map((place)=>(<Marker  className="type_car" position={place} icon={customIcon}></Marker> ))}
        
        </MapContainer>
        <Layoutadd/>
        <div className='drop_menu'>
          <div className='title'>
              <span>خط الطول </span>
              <span>خط العرض</span>
          </div>
          {point && point.map((po)=>(
                     <div className='content'>
                          <span>{po[0]}</span>
                          <span>{po[1]}</span>
                     </div>
          ))}
        </div>
    </div>
  )
}

export default Addpath