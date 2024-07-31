const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose
    .connect(url)
    .then(() => console.log('Connected to the DB...'))
    .catch((e) => console.log(e))
}

module.exports = connectDB


// This basically connects to the DB and the url is in the .env file. 
// If it connects then itll say connect to the DB and if doesnt 
// Then we will get an error

