import React, { Component } from 'react';
import './App.css';
import Life from './Life';
import DateInput from './DateInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthDate: null,
    };
    this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
  }
  handleBirthDateChange(birthDate) {
    this.setState({
      birthDate,
    });
  }
  componentDidUpdate() {
    console.log('birthDate submitted', this.state.birthDate) 
  }
  render() {
    return (
      <div className="root">
        <DateInput onSubmit={this.handleBirthDateChange}/>
        <Life birthDate={this.state.birthDate} />
      </div>
    );
  }
}

export default App;
