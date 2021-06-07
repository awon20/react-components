import React from "react";

export class Headline extends React.Component {

  constructor(props){
    super(props);

    // Asynchron function // nachlagern der Funktion
    setTimeout(() => {
     
      console.log('Middle')
    }, 2000);
  }
  render() {
    const styles = {
      color: "red",
    };

    return (<h1 style={styles}> {this.props.content} </h1>);
  }
}
