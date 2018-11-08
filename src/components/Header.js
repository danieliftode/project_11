import React from 'react';
import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';
import {Link} from 'react-router-dom';
//merge
const Header = (props) => {
  return (
    <div>
      <Nav />
    </div>
  )

}


export default Header;
