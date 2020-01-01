const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
    console.log("LOCAL BEING CALLED")
    console.log(email)
    console.log(password)

    User.findOne({email})
    .then(foundUser => {
        
        if(!foundUser || !bcrypt.compareSync(password, foundUser.password)) { 
            return done(null, false, {message: "Incorrect email or password"})
        }

        return done(null, foundUser)
        
    }).catch(err => done(err))
   
}))

// TRY VERSION
// try {
//     const user = await User.findOne({email})
//     console.log(user)

//     if(user === null || !bcrypt.compareSync(password, user.password)) {
//         done(null, false, {message: "Incorrect email or password"})
//     }

//     return done(null, user)

//    } catch(err) {
//        console.error(err)
//        return null
//    }



// MONGO WITHOUT THEN


// User.findOne({email}, (err, user) => {
//     if(err) {
//         return done(err)
//     }
//     if(!user) {
//         console.log("USER DOES NOT EXIST!")
//         return done(null, false)
//     }
// })
