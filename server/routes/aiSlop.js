const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const basePrompt = require('./utils/prompt/prompt.js'); 

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

// GET route
router.get('/', (req, res) => {
  res.send('Hello World!');
});









// POST route
router.post('/', async (req, res) => {
  try {
    const { prompt} = req.body; 

  
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content:basePrompt }, 
        { role: "user", content: prompt }
      ],
      max_tokens: 150
    });

    res.json({ result: response.choices[0].message.content });
    console.log('Response from OpenAI:', response.choices[0].message.content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});







module.exports = router;
