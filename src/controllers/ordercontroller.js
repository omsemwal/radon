const { model } = require("mongoose")
const orderModel = require("../models/order")
const productModel =require("../models/productModel")
const  userModel = require("../models/userModel")




const createOrder=  async function (req, res){
   let order =req.body
   let Saveorder=await orderModel.create(order)
   if(!Saveorder) {
            return res.send({msg: "user does not exist"});

}

const productId= order.product_id;
 let Saveproduct=await productModel.findById(productId);
    res.send({data: Saveproduct})
    if(!Saveproduct) {
             return res.send({msg: "product does not exist"});
 
 }


}
module.exports.createOrder=createOrder