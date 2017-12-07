import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Table from './components/table/table'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
        <p className="App-table">
          <Table/>
        </p>
      </div>
    );
  }
}

export default App;
