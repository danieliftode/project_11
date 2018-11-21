import React from 'react';
import {Link} from 'react-router-dom';
//importing components
//import Gallery from './Gallery';
//import Header from './Header';
const Nav = (props) => {

///here the "link's" are defined .....i admit still having trouble wraping my head around the whole LINK thing i need to study more 
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
