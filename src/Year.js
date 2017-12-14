import React, { Component } from 'react';
import Week from './Week';

export default class Year extends Component {
  render() {
    const { weeksInYear, weeksOld, value } = this.props;
    return (
      <div className="year">
        {Array.apply(0, Array(weeksInYear)).map((item, index) => {
          const isWeek = weeksInYear * value + index + 1;
          return (
            <Week
              key={index}
              active={isWeek <= weeksOld}
            />
          );
        })}
      </div>
    )
  }
};

Year.defaultProps = {
  weeksInYear: 52,
};