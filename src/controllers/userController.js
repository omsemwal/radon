const userModel = require("../models/userModel")

const createUser= async function (req, res){

 let user =req.body
  let saveuser= await userModel.create(user)
   res.send({msg:saveuser});
}
module.exports.createUser= createUser;

