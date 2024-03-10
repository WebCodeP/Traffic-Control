import React from 'react';
const Dropmenu = ({topDrop}) => {
  console.log(topDrop);
  return (
    <div style={{top:`${topDrop}%`}} className='drop_menu'>
      <p className='down'></p>
     </div>
  )
}

export default Dropmenu
