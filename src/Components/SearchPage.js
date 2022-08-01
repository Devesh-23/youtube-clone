import React from 'react';
import Header from "./Header"
import Sidebar from './Sidebar';
import "./SearchPage.css";
import SearchPageSection from './SearchPageSection';

function SearchPage() {
  return (
    <div>
      <Header/>
      <div className="SearchPageSection">
      <Sidebar/>
      <SearchPageSection/>
      </div>
      
    </div>
  )
}

export default SearchPage
