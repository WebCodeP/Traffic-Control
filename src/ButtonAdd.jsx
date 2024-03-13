import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import "./button.css";
import { GiPathDistance } from "react-icons/gi";
import { MdDirectionsBusFilled } from "react-icons/md";
import { Link } from 'react-router-dom';


const ButtonAdd = () => {
  return (

    <div className="add_button">
       <IoMdAddCircleOutline className='add_line'/>
       <div className="menu">
        
         <Link to="" className="add_line">
            <GiPathDistance className='icon_path'/>
            <span>مسار</span>
         </Link>

         <Link to="/Traffic-Control/Add" className="add_car">
            <MdDirectionsBusFilled className='icon_car'/>
            <span>مركبة</span>
         </Link>

       </div>
    </div>

  );
}

export default ButtonAdd
