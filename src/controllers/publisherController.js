const PublisherModel = require("../models/publisherModel")

const createPublisher= async function (res, req){
 let data = req.body
 let savedData = await PublisherModel.create(data)
 res.send({msg:savedData});

}
const getPublisherData= async function (req, res) {
    let data = await PublisherModel.find()
    res.send({msg: data});
}
module.exports.createPublisher=createPublisher 
module.exports. getPublisherData= getPublisherData