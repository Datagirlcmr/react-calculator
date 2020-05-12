import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="display-calc">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
