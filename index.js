const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("RelayFlow is sleeping");
});
app.listen(3000);
