import React from 'react';
import {Link} from 'react-router-dom';
//importing components
import Gallery from './Gallery';
import Header from './Header';
const Nav = (props) => {
  return(

    <nav>
      <ul>
        <li><Link to='/cats'>Cats</Link></li>
        <li><Link to='/dogs'>Dogs</Link></li>
        <li><Link to='/birds'>Birds</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
