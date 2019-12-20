const express = require('express'),
      http = require('http')
      socketIO = require('socket.io')


const app = express(), io;
server = http.Server(app)
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.json())

app.use(session({
    secret: 'bonsai is art',
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 5000
    })
}))

// PASSPORT COMES HERE

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000"]
}))

app.listen(5000, () => {
    console.log("CONNECTED TO PORT 5000!")
})