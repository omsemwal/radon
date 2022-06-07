const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    BookName:String,

    authorName:String,

   price : {
    indianPrice: String,
    europePrice: String
},

   totalpages: Number,
   stockAvailable:Boolean,

    
   year : {
        type : Number,
        default : 2021
    },
    tags : [String], 

},   {timestamps:true}) 
module.exports =mongoose.model('Book',BookSchema)