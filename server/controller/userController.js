const userModel = require('../model/users');

//Find User
exports.findUser = async (req, res) => {
    // res.json({message: req.params.id})
    let id = req.params.id;
   try {
        if (id) {
            let user = await userModel.findById(id);
            res.status(200).json(user);
        } else {
           let user = await userModel.find();
           res.status(200).json(user);
        }
   } catch (err) {
        res.json({message: err});
   }
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
exports.updateUser = async (req, res) => {
    let id = await req.params.id;
    try {
        let updateUser = await userModel.findByIdAndUpdate(id, req.body);
        updateUser.save();
    } catch (err) {
        res.status(500).json({message: err})
    }
}

//Delete User
exports.removeUser = (req, res) => {
    
}