import React, { Component } from 'react';
import './App.css';
import Life from './Life';
import DateInput from './DateInput';
import dateFns from 'date-fns';
window.dateFns = dateFns;
class App extends Component {
  constructor() {
    super();
    this.state = {
      birthDate: null,
      today: dateFns.format(Date.now(), 'YYYY-MM-DD'),
    };
    this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
  }
  handleBirthDateChange(birthDate) {
    this.setState({
      birthDate,
      weeksOld: dateFns.differenceInWeeks(this.state.today, birthDate),
    });
  }
  componentDidUpdate() {
    console.log('birthDate submitted', this.state.birthDate) 
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
