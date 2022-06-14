const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
const orderSchema = new mongoose.Schema( {
    user_id :{ type:ObjectId,
        ref:"user"
    },



    product_id: {type:ObjectId,
        ref:"product"
    },

  isFreeAppUser:Boolean,
  amount:0,
   date: String,
},    
{timestamps:true});
module.exports = mongoose.model('order', orderSchema)
