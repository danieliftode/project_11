import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
////importing components
import Header from './components/Header';
import Search from './components/Search';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Picture from './components/Picture';
import './style.css';
import  apiKey from './config';
import axios from 'axios';

import Testing from './components/Testing';

class App extends Component  {



  render(){
    return(
      <BrowserRouter >
        <div>
          <Header />
          <Route path='/' render={ () =>  <Gallery /> }/>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
