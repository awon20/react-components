import React from "react";
import { Headline } from "../core-components/Headline";
import { Paragraph } from "../core-components/Paragraph";
export class Message extends React.Component {
  render() {
    const headline = this.props.headline;
    const text = this.props.text;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Headline, {
      content: headline
    }), /*#__PURE__*/React.createElement(Paragraph, {
      text: text
    }));
  }

}