const express = require("express");
const app = express();
const cors = require('cors');
const data = require("./data.json");

app.listen(5000, function() {console.log("Listening on localhost port 5000");});

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200
}));

app.get("/", function(req, res){
  res.send(data);
});
