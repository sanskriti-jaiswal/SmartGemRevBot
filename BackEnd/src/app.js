require('dotenv').config();
const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const app= express()

app.use(cors());              //middleware to enable CORS

app.use(express.json());     //middleware to parse JSON bodies
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/ai', aiRoutes)

module.exports = app