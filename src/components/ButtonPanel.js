import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="cont-button">
      <div className="btn-row">
        <Button name="Ac" color="rgb(224, 223, 219)" />
        <Button name="+/-" color="rgb(224, 223, 219)" />
        <Button name="%" color="rgb(224, 223, 219)" />
        <Button name="÷" />
      </div>
      <div className="btn-row">
        <Button name="7" color="rgb(224, 223, 219)" />
        <Button name="8" color="rgb(224, 223, 219)" />
        <Button name="9" color="rgb(224, 223, 219)" />
        <Button name="x" />
      </div>
      <div className="btn-row">
        <Button name="4" color="rgb(224, 223, 219)" />
        <Button name="5" color="rgb(224, 223, 219)" />
        <Button name="6" color="rgb(224, 223, 219)" />
        <Button name="-" />
      </div>
      <div className="btn-row">
        <Button name="1" color="rgb(224, 223, 219)" />
        <Button name="2" color="rgb(224, 223, 219)" />
        <Button name="3" color="rgb(224, 223, 219)" />
        <Button name="+" />
      </div>
      <div className="btn-row">
        <Button name="0" wide color="rgb(224, 223, 219)" />
        <Button name="." color="rgb(224, 223, 219)" />
        <Button name="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
