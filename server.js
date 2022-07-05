const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/crud');
const db = mongoose.connection;
db.once('open', () => console.log('DATABASE CONNECTED SUCCESSFULY'));

app.use(express.json());
app.set('view engine', 'ejs');

app.use('/css', express.static(__dirname + '/assets/css/'));
app.use('/js', express.static(__dirname + '/assets/js/'));
app.use('/img', express.static(__dirname + '/assets/img/'));

app.get('/', (req, res) => res.render('index'));
app.get('/user', (req, res) => res.render('user'));

app.listen(8080, () => console.log('SERVER STARTED SUCCESSFULLY'));