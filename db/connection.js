const mongoose = require('mongoose');


const dbConnection = async(url) =>{
    try {
        await mongoose.connect(url);
        console.log('successfully connected to database');
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnection;