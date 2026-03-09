require('dotenv').config();
const express = require('express');
const cors = require('cors');
const aiSlopRoute = require('./routes/aiSlop');


const PORT = process.env.PORT;
const API = process.env.API_V;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(require('path').join(__dirname, '../public')));


// Routes
app.use(`${API}/aiSlop`, aiSlopRoute);



// start the server
function startServer (){
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
startServer();