//import express
const express = require("express");
require("dotenv").config()

//define api key
OPENAI_API_KEY=process.env.OPENAI_API_KEY

//create app with express
const app = express();

//define port that will be used
const port = 3001;

//handle http get request
app.get("/", (req, res) => {
  //return hello world to request
    res.send("Hello World!");
});

//listen for requests from the defined port
app.listen(port, () => {
  //log what port is being used for the app
  console.log(`listening on port ${port}!`);
});