//import express
const express = require("express")
//import chatgpt api handler
const CGPT = require("./ChatGPTAPI")
//import .env functionality
require("dotenv").config()

//define port that will be used
const port = process.env.BACK_END_PORT

//create app with express
const app = express()
//add parser for request body JSON
app.use(express.json())

//handle http get request
app.get("/", (req, res) => {
  //return hello world to request
  res.send("Seems to be working fine :)")
})

//handle http post request
app.post("/", async (req, res) => {
  //parse prompt from request
  prompt = req.body.prompt
  //retrieve response from OpenAI API
  GPTResponse = await CGPT.getCall(prompt)
  console.log(GPTResponse)
  //respond with Open AI Response
  res.send(GPTResponse)
})

//listen for requests from the defined port
app.listen(port, () => {
  //log what port is being used for the app
  console.log(`listening on port ${port}!`)
})