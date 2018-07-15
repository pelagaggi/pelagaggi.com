import React, { Component } from 'react';
import logo from './logo.svg';
import smile from './smile.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alexandre Pelagaggi</h1>
        </header>
        <p className="App-intro">
          Welcome to my personal webpage. Soon an amazing profile will be here.<br /><br />
          hope to see you then.<br /><br /><img style={{ width: 10 + 'vw' }} src={smile}/>
        </p>
        <br/>
        <h4>Meanwhile you can check my profile on <a href='www.linkedin.com/in/alexandre-pelagaggi'>Linkedin</a></h4>
      </div>
    );
  }
}

export default App;
