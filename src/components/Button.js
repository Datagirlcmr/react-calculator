import React from 'react';
import PropTypes from 'prop-types';

function Button({
  name, color, wide, onClick,
}) {
  const style = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };

  return (
    <button
      id="btn-name"
      type="button"
      style={style}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
