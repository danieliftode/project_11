import React from 'react';
import Gallery from './Gallery';

const Search = (props) => {
  return(
    <div>
      <form>
        <input className='valoare' type="text" />
        <button onClick={props.buton}>search for anything you want </button>
      </form>
    </div>
  );
}


export default Search;
