const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: '../config.env' });
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

// Connect to mongodb
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use('/api/register/', require('./src/api/register'));
app.use('/api/login/', require('./src/api/login'));
app.use('/api/auth/', require('./src/api/auth'));
app.use('/api/post/', require('./src/api/post'));
app.use('/api/user/', require('./src/api/user'));

let frontend_dir = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(frontend_dir));
app.get('*', function (req, res) {
  console.log('received request');
  res.sendFile(path.join(frontend_dir, 'index.html'));
});

app.listen(process.env.PORT || 8000, function () {
  console.log('Express server is running on port 8000');
});
