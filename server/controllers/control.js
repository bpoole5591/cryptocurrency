const axios = require("axios");

let cryptos = [];

let getApiData = (req, res, next) => {
  if (cryptos.length === 0) {
    axios
      .get(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
      .then(response => {
        cryptos = response.data;
        res.json(cryptos);
      });
  } else {
    res.json(cryptos);
  }
};

let updateCoin = (req, res, next) => {
  const { index } = req.params;
  console.log(cryptos);
  cryptos[index] = Object.assign({}, cryptos[index], { name: req.params.name });
  res.json(cryptos);
};

let removeCoin = (req, res, next) => {
  const { index } = req.params;
    cryptos.splice(index, 1);
    res.json(cryptos);  
};

let createCoin = (req, res, next) => {
    cryptos.push(req.body);
    res.json(cryptos);
};

module.exports = {
  getApiData,
  updateCoin,
  removeCoin
};
