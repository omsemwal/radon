const mongoose = require('mongoose');

const authorSchema= new mongoose.Schema ({
  
    authorName: String, 
    author_id :{
        type:Number,
        require:true
    }, 
    age:Number,
    address: String,
}, { timestamps:true});

module.exports = mongoose.model('author', authorSchema) 












