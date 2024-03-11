import React from 'react';
import './search.css';
import { IoMdSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className='search_bar'>
      <input type="search" placeholder='ابحث هنا'/>
      <IoMdSearch className='search_icon'/>
    </div>
  )
}

export default Search
