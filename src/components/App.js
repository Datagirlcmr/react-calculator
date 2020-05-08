import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
