import React, { Component } from 'react';

class TShirtSizeSelect extends Component {
    render() {
        return (
          <div>
            <label>
              Wähle eine T-Shirt Größe aus:
              <select
                id="tShirtSelect"
                name="tShirtSize"
                value={this.props.value}
                onChange={this.props.onChange}
              >
                <option value="W-S">W-S</option>
                <option value="W-M">W-M</option>
                <option value="W-L">W-L</option>
                <option value="M-S">M-S</option>
                <option value="M-M">M-M</option>
                <option value="M-L">M-L</option>
              </select>
            </label>
          </div>
        );
    }
}

export default TShirtSizeSelect;