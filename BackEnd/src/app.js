require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const aiRoutes = require('./routes/ai.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/ai', aiRoutes);
app.use('/api/auth', authRoutes); // 🔐 Connect auth route

module.exports = app;
