const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const NewbookSchema = new mongoose.Schema( {
    
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Newauthor"
    },
    price: Number,
    ratings: Number,

    publisher_id: {
        type:ObjectId,
        ref:"publisher"
    }

}, { timestamps: true });


module.exports = mongoose.model('NEWBook', NewbookSchema)
