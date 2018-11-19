import React, {Component} from 'react';
import Gallery from './Gallery';
//import apiKey  from '../config.js';






const Search = (props) => {



  // searchHandler = (e) => {
  //   e.preventDefault();
  //   const val = document.querySelector('.valoare').value;
  //   const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${val}&per_page=18&format=json&nojsoncallback=1`
  //   this.fetchPic(url);
  // }

//
// schimba = () => {
//   this.setState({
//     cauta: this.state.cauta + 1
//   })
// }
  // componentDidUpdate(prevState){
  //   if(prevState !== 1){
  //     console.log('se schimba')
  //   }
  // }

//   componentDidUpdate(prevState) {
//   //if(this.prevState === 1) {
//     console.log('e unu si dont fire ', this.state.testez)
//     // this.props.myProp has a different value
//     // we can perform any operations that would
//     // need the new value and/or cause side-effects
//     // like AJAX calls with the new value - this.props.myProp
//   //}
// }

  return(
    <div class='cauta'>
      <form>
        <input className='valoare' type="text" />
        <button onClick={props.buton}><i class="fa fa-search"></i></button>
      </form>
    </div>
  );
}


export default Search;
