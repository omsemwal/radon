const { response } = require("express")
const UserModel= require("../models/userModel")
 //const BookModel=require("../models/userModel")
//const createUser= async function (req, res) {
   ////// let data= req.body
    //let savedData= await UserModel.create(data)
    //res.send({msg: savedData})
//}

//const getUsersData= async function (req, res) {
  /////  let allUsers= await UserModel.find()
   // res.send({msg: allUsers})
//}

const createBook=async function (req,res) {
    let data= req.body
   let saveData= await UserModel.create(data)
    res.send({msg:saveData})

}
 
const getBooksData=async function (req, res) {
    let allbooks= await UserModel.find()
    res.send({msg:allbooks})
}

//module.exports.createUser= createUser
//module.exports.getUsersData= getUsersData
module.exports.createBook=createBook
module.exports.getBooksData= getBooksData