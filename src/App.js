import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom';
////importing components
import Header from './components/Header';
import Search from './components/Search';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Picture from './components/Picture';
import './style.css';
import {personal } from './config';
import Testing from './components/Testing';

class App extends Component  {
  state = {
    gallery: [],
    cautare: ['cats', 'dogs', 'birds'],
  }
  searchHandler = (e) => {
   e.preventDefault();
   const val = document.querySelector('.valoare').value;
   console.log(val)
   const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${personal.cod}&user_id=&tags=${val}&per_page=18&format=json&nojsoncallback=1`
   axios.get(url).then(response => {
     const gallery = response.data.photos.photo
       const container = []
       for(var i = 0; i < gallery.length; i++){
         container.push(`https://farm${gallery[i].farm}.staticflickr.com/${gallery[i].server}/${gallery[i].id}_${gallery[i].secret}.jpg`)
       };
       this.setState({
         gallery: container
       })
     }
   ).catch( ()=> {
     'something is wrong '
   })
   console.log(val)
 }
componentDidMount(){
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${personal.cod}&user_id=&tags=${this.state.cautare[0]}&per_page=18&format=json&nojsoncallback=1`
  axios.get(url).then(response => {
    const gallery = response.data.photos.photo
      const container = []
      for(var i = 0; i < gallery.length; i++){
        container.push(`https://farm${gallery[i].farm}.staticflickr.com/${gallery[i].server}/${gallery[i].id}_${gallery[i].secret}.jpg`)
      };
      this.setState({
        gallery: container
      })
    }
  ).catch( ()=> {
    'something is wrong '
  })
}
componentDidUpdate = () => {

  if(this.state.gallery){
    console.log(this.state.gallery)
  }
}


  render(){
    return(
      <BrowserRouter>

        <div>
          <Route exact path = '/' render = {() => <Header cauta={this.searchHandler} />} />
          <Route exact path='/' render={() => <Nav />}/>
          <Route exact path = '/cats' render={ () => <Gallery  pictures={this.state.gallery}/> } />
          <Route exact path ='/:id' render={() => <Testing />} />
          <button onClick={this.componentDidUpdate}>update </button>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
