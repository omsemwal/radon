const authorModel = require("../models/newauthorModel")
const bookModel= require("../models/newbookModel")
const publisherModel= require("../models/publisherModel")
const createBook= async function (req, res) {
    let book = req.body
    let bookCreate = await bookModel.create(book)
    res.send({data: bookCreate})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getdeatils = async function (req, res) {
    let deatils = await bookModel.find().populate('author_id')//.populate('author-id')
    res.send({data: deatils})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports. getdeatils= getdeatils

