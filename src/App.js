import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemList from './components/ItemList'
class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <ItemList />
      </div>
    );
  }
}

export default App;
