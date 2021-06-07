import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // console.log("clicked");
    // Asynchron function
    this.setState((state) => {
      state.counterValue++;
      return state;
    });
  }
  render() {
    return (
      <div>
        <h1>Counter value is: {this.state.counterValue}</h1>
        <button onClick={this.handleClick}>Klick mich!</button>
      </div>
    );
  }
}

