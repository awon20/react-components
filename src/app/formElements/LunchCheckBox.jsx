import React, { Component } from 'react';

class LunchCheckBox extends Component {
    render() {
        return (
          <div>
            <label>
              Willst du am Mittagessen teilnehmen?
              <input
                type="checkbox"
                name="lunch"
                id="lunch"
                checked={this.props.checked}
                onChange={this.props.onChange}
              />
            </label>
          </div>
        );
    }
}

export default LunchCheckBox;