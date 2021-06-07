import React, { Component } from 'react';

class NameInput extends Component {
    render() {
        return (
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.props.value}
                onChange={this.props.onChange}
              />
            </label>
          </div>
        );
    }
}

export default NameInput;