import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Article from './Article';
import Sidebar from './Sidebar';
import Clickbait from './Clickbait';
import Sharing from './Sharing';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
   

    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
      <Article />
        <Sharing />
      </div>
      <Sidebar />

      <div className="small-12 columns other-articles">
        <Clickbait />
      </div>
    </main>

    <footer className="expanded row">
      <h6>&copy; 2017 Erebor Industries</h6>
      <h6 className="float-right">All rights reserved</h6>
    </footer>

    
  
      </div>
    );
  }
}

export default App;
