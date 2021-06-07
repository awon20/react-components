import React from "react";
import Message from "./Message";
export class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Message, {
      headline: "Das ist eine erstes Headline",
      text: "Das ein erstes Pragraph"
    }), /*#__PURE__*/React.createElement(Message, {
      headline: "Das ist eine zwete Headline",
      text: "Das ein zweite Pragraph"
    }));
  }

}