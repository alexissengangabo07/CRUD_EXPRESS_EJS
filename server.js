const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1/users_ejs_crud');
const db = mongoose.connection;
db.once('open', () => console.log('DATABASE CONNECTED SUCCESSFULY'));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.set('view engine', 'ejs');

app.use('/css', express.static(path.resolve(__dirname + '/assets/css/')));
app.use('/js', express.static(path.resolve(__dirname + '/assets/js/')));
app.use('/img', express.static(path.resolve(__dirname + '/assets/img/')));

app.use('/', require('./server/routes/router'));

app.listen(8080, () => console.log('SERVER STARTED SUCCESSFULLY'));