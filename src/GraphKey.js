import React from 'react';
import PropTypes from 'prop-types';

const GraphKey = ({ children, axis }) => (
  <div className={`graphkey ${axis}`}>{children}</div>
);

GraphKey.propTypes = {
  axis: PropTypes.string,
  children: PropTypes.node,
};

export default GraphKey;