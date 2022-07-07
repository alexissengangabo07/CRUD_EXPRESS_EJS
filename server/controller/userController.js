const userModel = require('../model/users');

//Find User
exports.findUser = (req, res) => {

}

//Create User
exports.createUser = async (req, res) => {
    if(req.body.name != '' && req.body.email != '' && req.body.gender) {
        res.status(200).send({message: 'Utlisateur inseree avec success'});
        const userSave = await new userModel({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status,
        })
        userSave.save()
    }
    else {
        res.status(400).json({message: 'Remplissez le formulaire !'});
    }
}

//Update User
exports.updateUser = (req, res) => {
    
}

//Delete User
exports.removeUser = (req, res) => {
    
}