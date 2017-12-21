import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isFuture, parse } from 'date-fns';

export default class DateInput extends Component {
  constructor() {
    super();
    this.state = {
      date: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this._input.value.length !== 10) {
      alert('please enter full birthdate');
      return;
    };
    const date = this._input.value;
    const future = isFuture(parse(date));
    if (future) {
      alert('you probably werent born in the future, my dude');
      return;
    }
    this.setState({
      date,
    }, this.props.onSubmit(date));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='birthdate-form'>
        <label>Enter your date of birth and hit submit for a fun, not-depressing-at-all visualisation</label>
        <input ref={(input) => this._input = input} type="date" />
        <input type="submit" />
      </form>
    );
  }
}

DateInput.propTypes = {
  onSubmit: PropTypes.func,
};