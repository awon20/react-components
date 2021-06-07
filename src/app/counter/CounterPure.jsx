import React from 'react';

export class CounterPure extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
    };
  }
  onClick() {
    //console.log("clicked");
    // props sind die die Kanale wo die state fließen
    this.setState((state) => {
      return {
        counterValue: state.counterValue + 1,
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Counter value is: {this.state.counterValue}</h1>
        <button onClick={() => this.onClick()}>Increment ME!</button>
      </div>
    );
  }
}

