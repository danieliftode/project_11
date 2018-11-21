import React from 'react';
//import Search from './Search';
import Nav from './Nav';
//import Gallery from './Gallery';

//merge
const Header = (props) => {
  //simple header component where the nav "children sits " for separation of concern purposes 
  return (
    <div>
      <Nav />
    </div>
  )

}


export default Header;
