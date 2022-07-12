const axios = require('axios');

exports.homeRoute = (req, res) => {
    axios.get('http://localhost:8080/user_api')
    .then(response => {
        res.render('index', {users: response.data})
    })
    .catch(err => {
        res.send(err)
    });
};

exports.addUserRoute = (req, res) => { 
    res.render('add_user')
};

exports.updateUserRoute = (req, res) => {
    axios.get('http://localhost:8080/user_api', {params: { id: req.query.id }})
    .then(response => {
        res.render('update_user', {user: response.data});
    })
    .catch(err => {
        res.send(err)
    });
};