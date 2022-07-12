const userModel = require('../model/users');

//Find User
exports.findUser = async (req, res) => {
    // res.json({message: req.params.id})
    let id = req.query.id;
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
    try {
        if(req.body.name != '' && req.body.email != '' && req.body.gender) {
            // res.status(200).send({message: 'Utlisateur inseree avec success'});
            const userSave = await new userModel({
                name: req.body.name,
                email: req.body.email,
                gender: req.body.gender,
                status: req.body.status,
            })
            userSave.save()
            res.redirect('/');
        }
        else {
            res.status(400).json({message: 'Remplissez le formulaire !'});
        }   
    } catch (err) {
        res.json({message: err});
    }
}

//Update User
exports.updateUser = async (req, res) => {
    let id = await req.params.id;
    try {
        let updateUser = await userModel.findByIdAndUpdate(id, req.body);
        let users = await updateUser.save();
        console.log(users);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({message: err})
    }
}

//Delete User
exports.removeUser = async (req, res) => {
    let id = req.params.id;
    try {
        if (id) {
            let deleteUser = await userModel.findOneAndDelete({_id: id});
            let users = await deleteUser.save();
            res.status(200).json(users);
        } else {
            res.status(404).json({message: 'Utilisateur non trouvee'});
        }
    } catch (err) {
        res.status(500).json({message: err + 'erreur'});       
    }
}