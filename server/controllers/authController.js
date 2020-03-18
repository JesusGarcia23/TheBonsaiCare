const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

module.exports = {
    signUp(req, res) {
        const {firstName, lastName, email, password} = req.body;
        
        User.findOne( {email }).then(userFound => {
            if(!userFound){
                const bcryptsalt = 10;
                const salt = bcrypt.genSaltSync(bcryptsalt);
                const encryptedPassword = bcrypt.hashSync(password, salt);
                const bonsais = []
                User.create({ firstName, lastName, email, password: encryptedPassword, bonsais})
                .then(newUser => {
                    console.log("NEW USER!", newUser);
                    res.json({done: true});
                }).catch(err => console.error("An error just happened while signing up ", err));
            }else{
                res.json({message: "THIS EMAIL ALREADY EXISTS!"});
            }
        }).catch(err => {
            console.error(err);
        });
    },

    logInUser(req, res, next) {
        passport.authenticate('local', (err, user, info) => {
            if(err) {
                res.json({message: "unexpected error", err});
            }
            if(!user) {
                res.json(info);
            }
   
            req.login(user, (err) => {
                user.password = undefined
                if(err){
                    res.json({message: "error authenticating"});
                    return;
                }
                res.status(200).json({user});
            })
        })(req, res, next);
    },

    loggedIn(req, res, next) {
        if(req.user){
            req.user.password = undefined;
            res.json(req.user);
        }else{
            res.json(null);
        }
    },

    logOut(req, res, next) {
        req.logout();
        res.json({user: null});
    },

    careSignUp(req, res, next) {
        console.log(req.body);
        let serviceArr = [];
        let sizesArr = [];
        let { trimming, repotting, wiringStyling, fertilizer, pestControl, boarding, dropinVisit, boardingPrice, maintenancePrice, small, medium, large, xLarge, treesClasses} = req.body;
        let services = {Boarding: boarding, DropinVisit: dropinVisit, Trimming: trimming, Repotting: repotting, Wiring: wiringStyling, Fertilizer: fertilizer, pestControl: pestControl};
        let sizesPreference = {small: small, medium: medium, large: large, xLarge: xLarge};

        for(let keys in services){
            services[keys] === true ? serviceArr.push(keys) : null;
        }

        for(let sizes in sizesPreference){
            sizesPreference[sizes] === true ? sizesArr.push(sizes) : null;
        }

        User.findOne({_id: req.user.id}, (err, user) => {
            if(err){
                return err;
            }
            user.careProfile = true;
            user.services = serviceArr;
            user.fees.boarding = boardingPrice;
            user.fees.maintenance = maintenancePrice;
            user.pendingCare = [];
            user.comingCare = [];
            user.pastCare = [];
            user.daysNoAvailable = [];
            user.sizePreference = sizesArr;
            user.listOfTrees = [];
            user.rating = 0;
            user.reviews = [];
            user.save();
            res.json(user);
        })
    }

}