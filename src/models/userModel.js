const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema( {
   BookName: {
        type:String,
         required:true,
    },
    authorName: String,
    category: String,
    year:Number



},  {timestamps: true 

});






module.exports = mongoose.model('Book',BookSchema)

