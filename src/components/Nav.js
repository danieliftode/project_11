import React from 'react';
import {Link} from 'react-router-dom';
//importing components
import Gallery from './Gallery';
import Header from './Header';
const Nav = (props) => {
  return(

    <nav>
      <ul>
        <li><Link to='/cats'>cats</Link></li>
        <li><Link to='#'>dogs</Link></li>
        <li><Link to='#'>bids</Link></li>
        <li><Link to='/testing'>this takes me to testing component</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
