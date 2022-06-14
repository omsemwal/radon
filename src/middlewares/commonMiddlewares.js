const orderModel =require("../models/order")
const userModel =require("../models/userModel")



const mid1=   function ( req, res, next) {
    let headers=req.headers;
   let app =headers["isFreeAppUser"];
  if(!app){
    app = headers["isFreeAppUser"];
  }
  if (!app){
    return res.send({msg: "header is missing"})
  }
    if (app === "true"){
  req.appFree =true;
}else {
    req.appFree =false;

}
next();
}

const mid2=  async function ( req, res, next) {
    order=req.body
    userId=await userModel.findById(order.userId)
    if(userId){
        console.log("user exists")
        next()
    }
    else{
        res.send({msg:"user not exist"})

        
        
    }
    
}


module.exports.mid1= mid1
module.exports.mid2= mid2

