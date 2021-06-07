import React, { Component } from 'react';

class Tab extends Component {
    render() {
        return (
          <React.Fragment>
            <h1>
                { this.props.headline }
            </h1>
            <article>
                { this.props.children }
            </article>
          </React.Fragment>
        );
    }
}

export default Tab;