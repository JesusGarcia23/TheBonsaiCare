

module.exports = {
    sayHi(req, res){
        console.log("HELLO EVERYONE!")
        res.json({data: "Hey my friend"})
    }
    }