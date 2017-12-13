import React, { Component } from 'react';
import Week from './Week';

export default class Year extends Component {
  render() {
    const { weeksInYear } = this.props;
    return (
      <div className="year">
        {Array.apply(0, Array(weeksInYear)).map((item, index) => {
          return <Week key={index} />
        })}
      </div>
    )
  }
};

Year.defaultProps = {
  weeksInYear: 52,
};