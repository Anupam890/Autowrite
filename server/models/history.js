const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    toolname:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    contentTitle:String,
    


})