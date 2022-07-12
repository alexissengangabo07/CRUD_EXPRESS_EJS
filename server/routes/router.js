const router = require('express').Router();
const services = require('../services/render');
const controller = require('../controller/userController');

//Render
router.get('/', services.homeRoute);
router.get('/add-user', services.addUserRoute);
router.get('/update-user', services.updateUserRoute);

//API
router.get('/user_api', controller.findUser);
router.post('/user_api', controller.createUser);
router.patch('/user_api/:id', controller.updateUser);
router.delete('/user_api/:id', controller.removeUser);

module.exports = router;