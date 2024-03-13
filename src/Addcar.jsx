import React from 'react';
import "./addcar.css";
import {FaArrowRightLong} from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { IoMdRefresh } from 'react-icons/io';
import { FaViacoin  } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Addcar = () => {
  return (
    <div  className='add_conatiner'>  
       <div className="inner_div">
        <form action="" method="post">
          <header className='link'>
            <Link to="/" className='more'><IoIosMore/></Link>
            <Link to="/" className='go_home'><FaArrowRightLong /></Link>
          </header>
          
          <div>
              <IoMdRefresh className='ref'/>
              <input type="text" id='car_id' placeholder='رقم السيارة'/>
          </div>

          <div>
              <IoMdRefresh className='ref'/>
              <input type="text" id='gps_id' placeholder='رقم الجي بي اس'/>
          </div>


            <div>
            <IoMdRefresh className='ref'/>
              <select className='type_car' id="type_of_car" placeholder="نوع السيارة">
                <option  value="">باص</option>
                <option value="">سرفيس</option>
                <option value="">تكسي أجرة</option>
              </select>
            </div>

          <div>
              <IoMdRefresh className='ref'/>
              <select name="" id="path_car">
                <option value="">الزهراء - كراج شمالي</option>
                <option value="">السبيل - جامعة</option>
                <option value="">السوق - النزهة</option>
              </select>
          </div>
          
          <div>
          <IoMdRefresh className='ref'/>
            <input  className='date' type="date" name="" id="" placeholder='تاريخ الاضافة'/>
          </div>
          
          <div className='button'>
            <input type="submit"  value="تراجع" className='delet'/>
            <input type="submit"  value="اضافة" className='add'/>
          </div>

        </form>
       </div>
    </div>
  )
}

export default Addcar
