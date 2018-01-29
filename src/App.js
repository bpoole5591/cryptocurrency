import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';
import Ticker from './ticker.js';
import Card from './card.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: [],
      input: '',
      createname: '',
      createsym: '',
      createprice: '',
    };
    this.updateCoin = this.updateCoin.bind(this);
    this.removeCoin = this.removeCoin.bind(this);
    this.createCoin = this.createCoin.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/getApiData`).then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({ cryptos: cryptos });
    });
  }

  updateCoin(index, oldName, newName) {
    console.log(index, 'oldName: ', oldName, 'newName: ', newName);
    axios
      .put('api/updateCoin/' + index + '/' + newName)
      .then(res => {
        console.log(res);
        this.setState({ cryptos: res.data });
      })
      .catch(console.log);
  }

  removeCoin(index, name) {
    axios
      .delete('/api/removeCoin/' + index + '/' + name)
      .then(res => {
        this.setState({ cryptos: res.data });
      })
      .catch(console.log);
  }

  createCoin() {
    const coin = {
      name: this.state.createname,
      symbol: this.state.createsym,
      price_usd: this.state.createprice,
    };
    axios
      .post('/api/createCoin/', coin)
      .then(res => {
        this.setState({ cryptos: res.data });
      })
      .catch(e => alert(e));
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Cryptocurrency Tracker</h1>
          </header>

          <Ticker cryptos={this.state.cryptos} />

          {this.state.cryptos.length > 0 &&
            this.state.cryptos.map((val, i) => (
              <Card
                cryptos={this.state.cryptos}
                key={i}
                updateCoin={this.updateCoin}
                removeCoin={this.removeCoin}
                coin={val}
                index={i}
              />
            ))}
        </div>
        <div id="crypto-container">
          <span className="right">
            <button
              onClick={() => {
                this.createCoin(this.state.createname, this.state.createsym, this.state.createprice);
              }}
            >
              Create Your Own!
            </button>
          </span>
          <span className="right">
            <input
              type="text"
              placeholder="Price"
              onChange={event => {
                this.setState({ createprice: event.target.value });
              }}
            />
          </span>
          <span className="left">
            <input
              type="text"
              placeholder="Coin Name"
              onChange={event => {
                this.setState({ createname: event.target.value });
              }}
            />
          </span>
          <span className="left">
            <input
              type="text"
              placeholder="Symbol"
              onChange={event => {
                this.setState({ createsym: event.target.value });
              }}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
