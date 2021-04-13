import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <img src={logo} />
        <p>Hello React!</p>
      </div>
    );
  }
}

export default App;
