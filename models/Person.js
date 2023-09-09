const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String},
    gender:{type:String},
});

module.exports = mongoose.model('Person',PersonSchema);