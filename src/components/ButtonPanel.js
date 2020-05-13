import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ onClick }) {
  return (
    <div className="cont-button">
      <div className="btn-row">
        <Button name="Ac" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="+/-" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="%" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="÷" onClick={name => onClick(name)} />
      </div>
      <div className="btn-row">
        <Button name="7" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="8" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="9" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="X" onClick={name => onClick(name)} />
      </div>
      <div className="btn-row">
        <Button name="4" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="5" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="6" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="-" onClick={name => onClick(name)} />
      </div>
      <div className="btn-row">
        <Button name="1" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="2" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="3" color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="+" onClick={name => onClick(name)} />
      </div>
      <div className="btn-row">
        <Button name="0" wide color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="." color="rgb(224, 223, 219)" onClick={name => onClick(name)} />
        <Button name="=" onClick={name => onClick(name)} />
      </div>
    </div>
  );
}


ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
