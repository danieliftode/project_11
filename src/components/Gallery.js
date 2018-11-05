import React, {Component} from 'react';
import Picture from './Picture';
import axios from 'axios';
import {personal } from '../config.js';
import Search from './Search';
import Header from './Header';


class Gallery  extends Component  {
  state = {
    gallery: [],
    cautare: ['cats'],
    test:  1
  }
///seach e rezolvata
searchHandler = (e) => {
  e.preventDefault();
  const val = document.querySelector('.valoare').value;
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${personal.cod}&user_id=&tags=${val}&per_page=18&format=json&nojsoncallback=1`
  this.fetchPic(url);
}

testing = () => {
 this.setState({
   test: 2
 })
 console.log(this.state.test, 'this is state')
}

// componentDidUpdate(prevState){
//   if(prevState){
//     console.log('gallery just updated yu fool')
//   }
// }


//componentDidMount (afisarea initiala ) e rezolvata
componentDidMount(){
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${personal.cod}&user_id=&tags=${this.state.cautare[0]}&per_page=18&format=json&nojsoncallback=1`
  this.fetchPic(url);
}


///cererea la baza de date si crearea de this.state.gallery e rezolvata
fetchPic = (url) =>{
  axios.get(url).then(response => {
    const test = response.data.photos.photo
    this.setState({
      gallery: test.map(i => {
        return `https://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`
    })
    })
  }).catch(error => {
  })
}

  render(){

  return(
    <div>

      <Header />
      <button onClick={this.testing}>change the state named test</button>
      <Search buton={this.searchHandler}/>
      <h1>this is how i separate my components </h1>
      {this.state.gallery.map((i,x) => {
        return (
          <Picture pic={i} key={x++}/>
        )
      })}
    </div>
  );
}
}

export default Gallery;
