const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/crud');
const db = mongoose.connection;
db.once('open', () => console.log('DATABASE CONNECTED SUCCESSFULY'));

app.use(express.json());

app.listen(8080, () => console.log('SERVER STARTED SUCCESSFULLY'));