import React from 'react';

export class ResetCounter extends React.PureComponent {
  onClick() {
    this.props.onResetZero();
  }

  render() {
    const disabled = this.props.counterValue === 0;
    return (
      <button onClick={ () => this.onClick() }  disabled={ disabled }>
        Reset Counter
      </button>
    );
  }
}
