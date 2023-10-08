//import OpenAI modules
const OpenAI = require('openai')
//import .env functionality
require("dotenv").config()

//instantiate OpenAI object
const openai = new OpenAI({
	//save API key from .env file
  apiKey: process.env.OPENAI_API_KEY
})

//make a request to OpenAI
async function getCall(requestBody){
	const completion = await openai.completions.create({
	  //model of OpenAI to use
	  model: "text-davinci-003",
	  //prompt to give model
	  prompt: generatePrompt(requestBody),
	  //how predictable response will be
	  temperature: 0.5,
	  //max size of response
	  max_tokens: 30,
	})
	//parse response
  response = completion.choices[0].text
  console.log(response)
  //return response from OpenAI API
	return response
}

//Create prompt for AI
function generatePrompt(info){
	return `Give me 3 names for my project on GitHub, it has the following attributes:
	` + info
  return info
}

module.exports = { getCall }