import React from 'react';

import { CounterStateless } from './CounterStateless';
import { ResetCounter } from './ResetCounter';

export class CounterContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          counterValue: 0,
        };
    }
    onIncrement () {
        this.setState(state => ({
            counterValue: state.counterValue + 1
        }));
    }
    onResetZero () {
        this.setState({
            counterValue: 0
        });
    }
    render() {
        return (
          <div>
            <CounterStateless
              counterValue={this.state.counterValue}
              onIncrement={() => this.onIncrement()}
            />
            <br />
            <ResetCounter
              counterValue={this.state.counterValue}
              onResetZero={() => this.onResetZero()}
            />
          </div>
        );
    }
}

