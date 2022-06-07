const bodyParser = require("body-parser")
const { models } = require("mongoose")
const BookModel=require ("../models/BookModel")

const createBook = async  function ( req, res){
    let data =req.body 
    let savedData= await BookModel.create(data)
    res.send ({msg:savedData})

}

const getBooksInyear= async  function ( req, res){
    let data =req.body.year
    let savedData= await BookModel.find({year: {$eq:data}})
    res.send ({msg:savedData})
}
const getparticularBooks = async  function ( req, res){
    let data =req.body
    let savedData= await BookModel.find(data)
    res.send ({msg:savedData})
}
const getXINERBooks  = async function (req, res){
    let BooksINR =await BookModel.find({"price.indianprice": {$in:["100","200","500"]}})
    res.send({msg:BooksINR})

}
const getrandomBooks = async function (req,res){
    let randomBooks =await BookModel.find({$or:[{stockAavilable:true},{totalpages: {$gt:500}}]})
    res.send({msg:randomBooks})

    }

const getBookData = async function (req,res){
    let allBooks =await BookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({msg:allBooks})


}
 module.exports.createBook= createBook
 module.exports.getBookData= getBookData
 module.exports.getBooksInyear= getBooksInyear
 module.exports.getparticularBooks=getparticularBooks
 module.exports.getXINERBooks= getXINERBooks
 module.exports.getrandomBooks= getrandomBooks

 