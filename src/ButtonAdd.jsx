import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import "./button.css";
import { GiPathDistance } from "react-icons/gi";
import { MdDirectionsBusFilled } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ButtonAdd = () => {
const [show , setShow] = useState("none");
const showMenu = () =>{
  setShow("block")
}
  return (

    <div className="add_button">
       <IoMdAddCircleOutline className='add_line' onClick={showMenu}/>
       <div className="menu" style={{display:show}}>
        
         <Link to="/Traffic-Control/AddPath" className="add_line">
            <span>مسار</span>
            <GiPathDistance className='icon_path'/>
         </Link>

         <Link to="/Traffic-Control/AddCar" className="add_car">
            <span>مركبة</span>
            <MdDirectionsBusFilled className='icon_car'/>
         </Link>

       </div>
    </div>

  );
}

export default ButtonAdd
