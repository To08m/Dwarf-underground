import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Article from './Article';
import Sidebar from './Sidebar';
import Clickbait from './Clickbait';
import Sharing from './Sharing';
import Footer from './Footer';


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

    <Footer />

    
  
      </div>
    );
  }
}

export default App;
