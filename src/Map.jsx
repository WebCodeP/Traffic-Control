import React from 'react';
import { useState   } from 'react';
import { MapContainer, TileLayer ,Polyline,Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';



import site from './assets/3d-map (2).png';
import bus from './assets/bus.png';
import { Icon } from 'leaflet';




const Map = () => {
const posation = [34.7325,36.7367];
const customIcon = new Icon({
iconUrl:bus,
iconSize: [32, 32],
});
  // path one
const route = [[34.7325,36.7367],
 [34.7203,36.7371],
 [34.7200,36.7261],
 [34.7150,36.7209],
 [34.7147,36.7199],
 [34.7146,36.7195],
 [34.7134,36.7198],
 [34.7097,36.7218],
 [34.7068,36.7146],
 [34.70682,36.71259],
 [34.70940,36.71268],
 [34.70928,36.71264],
 [34.70678,36.71257],
 [34.70677,36.71454],
 [34.70680,36.71471],
 [34.70962,36.72183],
 [34.70968,36.72195],
 [34.70985,36.72194],
 [34.71314,36.72001],
 [34.71371,36.71985],
 [34.71431,36.71995],
 [34.71446,36.72028],
 [34.71482,36.72082],
 [34.72000,36.72634],
 [34.72003,36.72660],
 [34.72028,36.73729],
 [34.72157,36.73724],
 [34.72363,36.73721],
 [34.72677,36.73708],
 [34.73256,36.73685]];
  
  const [center, setCenter] = useState([34.7325,36.7367]);


return (
  <div className='map'>
    <MapContainer  style={{ height: "100%", width: "100%" }}  center={center} zoom={5} zoomControl={false} >
      <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        
      {/* <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Esri"/> */}
   
    <Polyline positions={route} pathOptions={{color:"#009c00"}}/>
    

    <Marker className="type_car" position={posation} icon={customIcon}>
       
    </Marker>

   
    </MapContainer>
</div>
 );
}


export default Map;