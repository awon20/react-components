import React from 'react';

export class CounterStateless extends React.PureComponent {
  handleClick() {
    this.props.onIncrement();
  }
  render() {
    return (
      <div>
        <h1>Counter value is: {this.props.counterValue}</h1>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

