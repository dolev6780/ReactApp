const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
    Fname: String,
    Lname:String,
    age:Number,
});

const userInfo = mongoose.model('user_info',testSchema);

module.exports = userInfo;