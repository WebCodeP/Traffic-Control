import React from 'react';
import './search.css';
import { IoMdSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className='search_bar'>
      <IoMdSearch className='search_icon'/>
      <input type="search" placeholder='ابحث هنا'/>
    </div>
  )
}

export default Search
