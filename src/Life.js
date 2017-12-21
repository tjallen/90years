import React from 'react';
import PropTypes from 'prop-types';
import Year from './Year';
import Label from './Label';
import GraphKey from './GraphKey';

const Life = ({ yearsInLife, weeksOld }) =>
  (
    <div className="life">
      {Array.apply(0, Array(yearsInLife)).map((item, index) => {
        return (
          <div key={index} className="yearwrapper">
            {index === 0
              ? <div><GraphKey axis='x'>Week of the year &rarr;</GraphKey><GraphKey axis='y'>&larr; Age</GraphKey></div>
              : null
            }
            {index % 5 === 0 ? <Label>{index}</Label> : null}
            <Year value={index} weeksOld={weeksOld} />
          </div>
        );
      })}
    </div>
  );

Life.defaultProps = {
  yearsInLife: 90,
};
Life.propTypes = {
  yearsInLife: PropTypes.number.isRequired,
  weeksOld: PropTypes.number,
};

export default Life;