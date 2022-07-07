const router = require('express').Router();
const services = require('../services/render');
const controller = require('../controller/userController');

router.get('/', services.homeRoute);

router.get('/add-user', services.addUserRoute);

router.get('/update-user', services.updateUserRoute);

//API
router.get('/:id', controller.findUser);
router.post('/add-user', controller.createUser);
router.put('/update-user', controller.updateUser);
router.delete('/delete-user', controller.removeUser);

module.exports = router;