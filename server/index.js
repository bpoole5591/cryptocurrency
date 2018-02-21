const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const controller = require("./controllers/control.js");

const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(cors());
app.use(json());

const port = 3001;

app.get("/api/getApiData", controller.getApiData);
app.put("/api/updateCoin/:index/:name", controller.updateCoin);
app.delete("/api/removeCoin/:index/:name", controller.removeCoin);
app.post("/api/createCoin", controller.createCoin);

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
