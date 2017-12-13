import React, { Component } from 'react';
import './App.css';
import Life from './Life';
import DateInput from './DateInput';

class App extends Component {
  render() {
    return (
      <div className="root">
        <DateInput />
        <Life />
      </div>
    );
  }
}

export default App;
