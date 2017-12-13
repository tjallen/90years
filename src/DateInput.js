import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DateInput extends Component {
  render() {
    return (
      <form>
        <label>Enter your birthday</label>
        <input type="date" />
      </form>
    );
  }
}

DateInput.propTypes = {
};