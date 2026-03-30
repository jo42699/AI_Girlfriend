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
    const { prompt, systemPrompt} = req.body; 


    if(!prompt){
      res.json({error: "Prompt is required"})
    }

     const safeSystemPrompt =
      typeof systemPrompt === "string" && systemPrompt.trim() !== ""
        ? systemPrompt
        : basePrompt;



    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content:safeSystemPrompt }, 
        { role: "user", content: prompt}
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
