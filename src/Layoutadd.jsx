import React, {useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import './layoutadd.css';
import { HiOutlineXMark } from "react-icons/hi2";
import { LuArrowRightFromLine } from "react-icons/lu";
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";

const Layoutadd = ({onClick}) => {
const [left , setLeft] = useState("calc(100% - 16rem)");
function goLeft()
{
  setLeft("100%");
}
function openMenu()
{
  setLeft("calc(100% - 16rem)")
}

  return (
    <>
    <Link to="/Traffic-Control" className="gohome" ><IoArrowBack className='icon_go'/></Link>
    <div className="back" onClick={onClick}><RiArrowGoBackFill className='icon_for'/></div>
    <div className='open_menu' onClick={openMenu}><FiMenu className='menu_icon'/></div>
    <div className='control_box' style={{left:`${left}`}}>
      <div className='cansel'>
        <LuArrowRightFromLine className='arrow_left'onClick={goLeft}/>
         <HiOutlineXMark className='cansel_icon'/>
      </div>
      <hr />
      <div className='message'> قم بالنقر على الخريطة للتحديد نقاط المسار المراد رسمه ثم قم بتحديد اسم مميز للمسار</div>
      <input type="text" name="" id="" placeholder='اسم المسار' className='path_name'/>
      <div className="addpath"><span>اضافة المسار</span><MdOutlineAdd className='plus_icon'/></div>
      <div className="delpath"><span>حذف المسار</span><RiDeleteBin6Line className='minus_icon'/></div>
     
      <div className='add_car'><span>لاضافة عربة انقر على </span><Link className='link' to='/Traffic-Control/AddCar'>اضافة عربة</Link></div>
    </div>
    </>
  )
}




export default Layoutadd
