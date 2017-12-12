import React, { Component } from "react";
import "./App.css";
// var NumberFormat = require("react-number-format");

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: this.props.cryptos,
      name: this.props.coin.name,
      input: ""
    };
  }

  render() {
      return (
       // <div>
      <div id="crypto-container">
        <span className="left">{this.props.coin.name}</span>
        <span className="right">
          <button
            onClick={() => {
              this.props.removeCoin(
                  this.props.index,
                this.state.name  
              );
            }}
          >
            Delete!{" "}
          </button>
            </span>
            <span className="right">
          <button
            onClick={() => {
              this.props.updateCoin(
                this.props.index,
                this.state.name,
                this.state.input
              );
            }}
          >
            Change Name!{" "}
          </button>
        </span>    

        <span className="right">
          <input
            type="text"
            onChange={event => {
              this.setState({ input: event.target.value });
            }}
          />
        </span>
        </div>
        /* <div id="crypto-container">
            <button onClick={() => {
                this.props.createCoin
            }}>
        Create Your Own!</button>        
        </div> 
        </div> */
    );
  }
}
