/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(n) {
    const newState = Calculate(n, this.state);
    this.setState(newState);
  }

  render() {
    return (
      <div id="display-calc">
        <Display result={this.state.total || '0'} />
        <ButtonPanel onClick={name => this.handleClick(name)} />
      </div>
    );
  }
}

export default App;
