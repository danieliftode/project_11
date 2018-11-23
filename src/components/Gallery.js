import React, {Component} from 'react';
import Picture from './Picture';
import axios from 'axios';
import apiKey  from '../config.js';
import Search from './Search';
import Header from './Header';
import '../style.css';

///defining state
class Gallery  extends Component  {
  state = {
    gallery: [],
    val: ''
  }

//this function takes a input value and add's it to a variable wich then is used in the request link to the apiKey
//the request to the api beeing a separate function (fetchPic(url))
//e.preventDefault is a method wich cancels out the "flick/twich" of the input tag behavior
searchHandler = (e) => {
  e.preventDefault();
  const word = document.querySelector('.valoare').value;
  this.setState({
    val : word
  })
  //this.state.val = document.querySelector('.valoare').value;
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${this.state.val}&per_page=18&format=json&nojsoncallback=1`
  this.fetchPic(url);

}

//////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// testing = () => {
//  this.setState((prevState, props) => ({
//    test: prevState.test + 1
//  }), () => { console.log(this.state.test)})
// }
////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!
// componentDidUpdate(){
//   console.log(this.state.test);
// }

/// react lifecycle method wich renders (executes) imediatly to the dom
componentDidMount(){
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${this.props.link}&per_page=18&format=json&nojsoncallback=1`
  this.fetchPic(url);
}


///request to the api using axios and takes the response and asigns some pictures into gallery state variable (defined previously as empy)
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

      <Search buton={this.searchHandler}/>
      <Header />
      <h1 className='results'>Pictures of {this.state.val ? this.state.val : this.props.link}</h1>
      <div className='gallery-container'>
      {this.state.gallery.map((i,x) => {
        return (
          <Picture pic={i} key={Math.floor(Math.random() * 99999)} comment={this.props.link}/>
        )
      })}
    </div>
    </div>
  );
}
}

export default Gallery;
