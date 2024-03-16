import React from 'react';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Addcar from './Addcar';
import Addpath from './Addpath';
import Started from './Started';
import Main from './Main';
import { useState , useEffect } from 'react';

const RouterPage = () => {

  const [showPage , setShowPage] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{setShowPage(false)},4000);
  },[]);


  return (
    <Router>
      <Routes>
        <Route path='/Traffic-Control' element={ showPage?<Started/>:<Main/>}/>
        <Route path='/Traffic-Control/AddCar' element={<Addcar/>}/>
        <Route path='Traffic-Control/AddPath' element={<Addpath/>}/>
      </Routes>
    </Router>
  )
}

export default RouterPage;
