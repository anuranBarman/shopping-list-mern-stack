const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        default: Date.now,
        type:Date
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);