import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="display-res">
      <h1 id="total-res">
        {result}
      </h1>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
