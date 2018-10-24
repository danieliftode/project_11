import React from 'react';


const Search = (props) => {
  console.log(props)
  return(
    <div>
      <form>
        <input className='valoare' type="text" />
        <button onClick={props.search}>search for anything you want </button>
      </form>
    </div>
  );
}


export default Search;
