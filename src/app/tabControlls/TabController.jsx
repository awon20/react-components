import React, { Component } from 'react';

class TabController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        }
    }
    switchTab(newIndex) {
        this.setState({
            activeTab: newIndex
        })
    }

    render() {
        const tabSelection = this.props.children.map((tab, index) =>{
            const key = `tab-${index}`;
            const content = index === this.state.activeTab ?
                (<b>{ tab.props.headline }</b>) :
                (<i>{ tab.props.headline }</i>)

             return (
               <li key={key}>
                 <a href="#" onClick={() => this.switchTab(index)}>
                   {content}
                 </a>
               </li>
             );
        });
        return (
          <React.Fragment>
            <nav>
                <ul>
                  { tabSelection }
                </ul>
            </nav>
            {this.props.children[this.state.activeTab]}
          </React.Fragment>
        );
    }
}

export default TabController;