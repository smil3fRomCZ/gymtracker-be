const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// Init express app
const app = express();

// Set up 3rd party middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// Routers

module.exports = app;
