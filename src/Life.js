import React from 'react';
import Year from './Year';
import Label from './Label';
import GraphKey from './GraphKey';

const Life = ({ yearsInLife }) =>
  (
    <div className="life">
    <GraphKey axis='x'>Week of the year &rarr;</GraphKey>
    <GraphKey axis='y'>&larr; Age</GraphKey>
      {Array.apply(0, Array(yearsInLife)).map((item, index) => {
        return (
          <div key={index} className="yearwrapper">
            {index % 5 === 0 ? <Label>{index}</Label> : null}
            <Year value={index} />
           </div>
        )
      })}
    </div>
  );

Life.defaultProps = {
  yearsInLife: 90,
};

export default Life;