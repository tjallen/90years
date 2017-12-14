import React, { Component } from 'react';
import './App.css';
import Life from './Life';
import DateInput from './DateInput';
import { format, differenceInWeeks } from 'date-fns'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthDate: null,
      today: format(Date.now(), 'YYYY-MM-DD'),
    };
    this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
  }
  handleBirthDateChange(birthDate) {
    this.setState({
      birthDate,
      weeksOld: differenceInWeeks(this.state.today, birthDate),
    });
  }
  render() {
    return (
      <div className="root">
        <DateInput onSubmit={this.handleBirthDateChange}/>
        <Life weeksOld={this.state.weeksOld} />
      </div>
    );
  }
}

export default App;
