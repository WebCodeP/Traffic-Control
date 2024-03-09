import React from 'react';
import Map from './Map';
import './main.css';
import Navber from './Navbar';
import Search from './Search';
const Main = () => {
  return (
    <div className='main'>
      <Map/> 
      <Navber/>
      <Search/>
    </div>
  );
}

export default Main
