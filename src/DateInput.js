import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DateInput extends Component {
  constructor() {
    super();
    this.state = {
      date: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    if (this._input.value.length !== 10) {
      alert('please enter full birthdate');
      return;
    };
    console.log('submitted', this._input.value, this._input.value.length)
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Enter your birthday</label>
        <input ref={(input) => this._input = input} type="date" />
        <input type="submit" />
      </form>
    );
  }
}

DateInput.propTypes = {
};