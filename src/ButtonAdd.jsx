import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import "./button.css";
import { GiPathDistance } from "react-icons/gi";
import { MdDirectionsBusFilled } from "react-icons/md";
const ButtonAdd = () => {
  return (
    <div className="add_button">
       <IoMdAddCircleOutline className='add_line'/>
       <div className="menu">
        
         <div className="add_line">
            <GiPathDistance className='icon_path'/>
            <span>مسار</span>
         </div>
         <hr />
         <div className="add_car">
            <MdDirectionsBusFilled className='icon_car'/>
            <span>مركبة</span>
         </div>

       </div>
    </div>
  )
}

export default ButtonAdd
