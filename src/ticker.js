import React, { Component } from "react";
import "./App.css";
var NumberFormat = require("react-number-format");

export default class Ticker extends Component {
  constructor(props) {
    super(props);

    this.state = { cryptos: this.props.cryptos };
  }

  render() {
    return (
      <div className="tracker">
        <div id="crypto-container">
        <span className="left" id="title">Name</span>
        <span className="left" id="title"> (Symbol)</span>
        <span className="right" id="title">USD Value</span>
        </div>
        {this.props.cryptos.map(key => (
          <div id="crypto-container">
            <span className="left">{key.name}</span>
            <span className="left"> ({key.symbol})</span>
            <span className="right">
              <NumberFormat
                value={key.price_usd}
                isNumericString={true}
                fixedDecimalScale={true}
                displayType={"text"}
                decimalScale={2}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </div>
        ))}
      </div>
    );
  }
}
