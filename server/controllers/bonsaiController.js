const Bonsai = require('../models/Bonsai');
const User = require('../models/User');

module.exports = { 
    createBonsai(req, res, next) {
        console.log(req.body);
        const { imageId, bonsaiDescription } = req.body;
        Bonsai.create({
            bonsaiImg: imageId,
            description: bonsaiDescription
        }).then(newBonsai => {
            User.findByIdAndUpdate(req.user.id, {
                $push: { bonsais: newBonsai._id }
            })

            res.json(newBonsai);
        }).catch(err => {
            res.json({message: 'An error just happened when creating Bonsai', err});
        })
    }
}