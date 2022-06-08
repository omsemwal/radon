const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")
//const bookModel = require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const createBook= async function (req, res) {
    let data= req.body
   let saveData= await BookModel.create(data)
    res.send({msg: saveData})
}
const getBooksbyChetanBhagat= async function (req, res) {
    let data= await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await BookModel.find({author_id:data[0].author_id})
  res.send({msg:bookData})
}


const gettwostatus= async function (req, res) {
  let data=await BookModel.findOneAndUpdate(
      {name:"Two states"},
      {$set:{price:50}},
      {new:true}
      );
 const  savedata =await AuthorModel.find({author_id:data.author_id}).select({author_name:1,_id:0})
  //let price = data.price;
     console.log(savedata);
   res.send( { msg: savedata})
}

const bookFind = async function (req,res){
    let cost = await BookModel.find({ price: {$lte:50, $gte:100} }).select({author_id:1})
    let data = await AuthorModel.find({ $or:[{author_id: cost[0].author_id},{author_id: cost[5].author_id}]})(
    {author_name:1,author_id:1, _id:0})
    const autherName =data.map((x) => x.author_name)

        res.send({msg:autherName})

}




module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBooksbyChetanBhagat= getBooksbyChetanBhagat
module.exports.gettwostatus= gettwostatus
module.exports.bookFind= bookFind



