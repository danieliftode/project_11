import React, {Component} from 'react';
import Picture from './Picture';
import axios from 'axios';
import apiKey  from '../config.js';
import Search from './Search';
import Header from './Header';
import '../style.css';


class Gallery  extends Component  {
  state = {
    gallery: [],
    test:  1,
    val: ''
  }

searchHandler = (e) => {
  e.preventDefault();
  this.state.val = document.querySelector('.valoare').value;
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


componentDidMount(){
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${this.props.link}&per_page=18&format=json&nojsoncallback=1`
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

      <Search buton={this.searchHandler}/>
      <Header />
      <h1 className='results'>Pictures of {this.state.val ? this.state.val : this.props.link}</h1>
      <div className='gallery-container'>
      {this.state.gallery.map((i,x) => {
        return (
          <Picture pic={i} key={x++}/>
        )
      })}
    </div>
    </div>
  );
}
}

export default Gallery;
