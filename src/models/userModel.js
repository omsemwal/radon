const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    address: String,
    Balance:{
        default: 100,
        type:Number,

    },

    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    age: Number,

    isfreeAppUser:{
            type:Boolean,
           

    }
   
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users





















 // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]

// String, Number
// Boolean, Object/json, array