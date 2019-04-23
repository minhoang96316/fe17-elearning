import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <h1>Elearning</h1>
      </div>
    );
  }
}

export default App;
