const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
    signUp(req, res){
        console.log("THIS IS HAPPENING")
        const {firstName, lastName, email, password, zipcode} = req.body
        console.log(email)
        
        User.findOne( {email }).then(userFound => {
            if(!userFound){
                console.log("USER NOT FOUND!")
                const bcryptsalt = 10;
                const salt = bcrypt.genSaltSync(bcryptsalt);
                const encryptedPassword = bcrypt.hashSync(password, salt)
                const bonsais = []
                User.create({ firstName, lastName, email, password: encryptedPassword, zipcode, bonsais})
                .then(newUser => {
                    console.log("NEW USER!", newUser)
                    res.json(newUser)
                }).catch(err => console.error("An error just happened while signing up ", err))
            }else{
                res.json({message: "THIS EMAIL ALREADY EXISTS!"})
            }
        }).catch(err => {
            console.error(err)
        })
    }
}