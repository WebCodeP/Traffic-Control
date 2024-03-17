import {React,useEffect ,useRef,useState} from 'react';
import "./carousel.css";
import {motion} from "framer-motion";
import { PiRoadHorizonFill } from "react-icons/pi";
import { RiRoadsterLine } from "react-icons/ri";
import { SiPivotaltracker } from "react-icons/si";
import { GiBusStop } from "react-icons/gi";
import { GiPathDistance } from "react-icons/gi";

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

const Carousel = () => {
const carousel = useRef();
const [width , setWidth] = useState(0);
useEffect(()=>{
  setWidth(carousel.current.offsetWidth -carousel.current.scrollWidth );
},[])
  return (
      <motion.div ref={carousel} className='carousel'>
          <motion.div drag="x" dragConstraints ={{left:0 , right:-width}}className='inner_carousel'>
            <motion.div className='item'>
              
              <button><PiRoadHorizonFill/>المسارات</button>
            </motion.div>
            <motion.div className='item'>
               <button><RiRoadsterLine/>المركبات</button>
            </motion.div>
            <motion.div className='item'>
                <button><SiPivotaltracker/>تعقب</button>
            </motion.div>
            <motion.div className='item'>
                 <button><GiBusStop/>موقف</button>
            </motion.div>
            <motion.div className='item'>
                  <button><GiPathDistance/>المسافة</button>
            </motion.div>
            <motion.div className='item'>
                 <button><FaMapMarkerAlt/>استكشاف</button>
            </motion.div>
            <motion.div className='item'>
                  <button><IoMdSettings/>الاعدادات</button>
            </motion.div>
            <motion.div className='item'>  
                  <button><IoIosMore/>المزيد</button>
            </motion.div>
           
          </motion.div>
      </motion.div>
  );
}

export default Carousel
