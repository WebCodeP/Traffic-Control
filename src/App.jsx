import './App.css';
import Started from './Started';
import Main from './Main';
import { useState , useEffect } from 'react';


function App() {
  // show page
  const [showPage , setShowPage] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{setShowPage(false)},1000);
  },[]);
  //end show page

  return (
    <div>
      {showPage?<Started/>:<Main/>}
    </div>
  );
}

export default App;
