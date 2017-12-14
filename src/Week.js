import React from 'react';
import PropTypes from 'prop-types';

const Week = ({ active }) =>
  <div className={`week active--${active}`}></div>;

Week.defaultProps = {
  active: false,
};

Week.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Week;