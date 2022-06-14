
const productModel = require("../models/productModel")

const createProduct=  async function (req, res){
    product =req.body
    saveProduct= await productModel.create(product)
    res.send({msg:saveProduct});

}
 module.exports.createProduct=createProduct;












9