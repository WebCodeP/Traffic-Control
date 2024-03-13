import React from 'react';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Addcar from './Addcar';

import Started from './Started';
import Main from './Main';
import { useState , useEffect } from 'react';

const RouterPage = () => {

  const [showPage , setShowPage] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{setShowPage(false)},1000);
  },[]);


  return (
    <Router>
      <Routes>
        <Route path='/' element={ showPage?<Started/>:<Main/>}/>
        <Route path='/Add' element={<Addcar/>}/>
      </Routes>
    </Router>
  )
}

export default RouterPage;
