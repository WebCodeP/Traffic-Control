import React from 'react';
import "./addcar.css";
import {FaArrowRightLong} from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { IoMdRefresh } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { PiPath } from "react-icons/pi";
import { MdGpsFixed } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineBusAlert } from "react-icons/md";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaLink } from 'react-icons/fa6';
const Addcar = () => {
  return (
    <div  className='add_conatiner'>  
       <div className="inner_div">
        <form action="" method="post">
          <header className='link'>
            <Link to="/" className='more'><IoIosMore/></Link>
            <Link to="/Traffic-Control" className='go_home'><FaArrowRightLong /></Link>
          </header>
          <p className='title'>اضافة عربة الى مسار معين على الخريطة</p> 
          <div>
              <IoMdRefresh className='ref'/>
              <input type="text" id='car_id' placeholder='رقم السيارة'/>
              <MdOutlineSubtitles className='icons'/>
          </div>

          <div>
              <IoMdRefresh className='ref'/>
              <input type="text" id='gps_id' placeholder='رقم الجي بي اس'/>
              <MdGpsFixed className='icons'/>
          </div>


            <div>
            <IoMdRefresh className='ref'/>
              <select className='type_car' id="type_of_car" placeholder="نوع السيارة">
              <option value="" selected disabled>نوع المركبة</option>
                <option  value="">باص</option>
                <option value="">سرفيس</option>
                <option value="">تكسي أجرة</option>
              </select>
              <MdOutlineBusAlert className='icons'/>
            </div>

          <div>
              <IoMdRefresh className='ref'/>
              <select name="" id="path_car">
                <option value="" selected disabled>أختر المسار</option>
                <option value="">الزهراء - كراج شمالي</option>
                <option value="">السبيل - جامعة</option>
                <option value="">السوق - النزهة</option>
              </select>
              <PiPath className='icons'/>
          </div>
          
          <div>
          <IoMdRefresh className='ref'/>
            <input  className='date' type="date" name="" id="" placeholder='تاريخ الاضافة'/>
            <MdOutlineDateRange className='icons'/>
          </div>
          
          <div className='button'>
            <input type="submit"  value="تراجع" className='delet'/>
            <input type="submit"  value="اضافة" className='add'/>
          </div>
           
           <div className='last_form'><Link className='add_path'>أضافة مسار</Link><span>لاضافة مسار الى الخريطة انقر على   <FaLink className='link_path'/></span></div>
        </form>
       </div>
    </div>
  )
}

export default Addcar
