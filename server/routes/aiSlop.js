const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
try{
    await res.send('Hello World!');

}catch(error){
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });}
});
    


module.exports = router;