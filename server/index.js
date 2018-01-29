const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const controller = require("./controllers/control.js");

const app = express();

app.use(cors());
app.use(json());

const port = 3001;

app.get("/api/getApiData", controller.getApiData);
app.put("/api/updateCoin/:index/:name", controller.updateCoin);
app.delete("/api/removeCoin/:index/:name", controller.removeCoin);
app.post("/api/createCoin", controller.createCoin);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
