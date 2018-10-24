import React from 'react';
import Search from './Search';
import Nav from './Nav';
//merge
const Header = (props) => {
  return (

    <div>
      <Search search={props.cauta}/>
      
    </div>
  );
}


export default Header;
