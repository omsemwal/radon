
const mid1= function ( req, res, next) {
    req.falana= " i am just trying "
    console.log("Hi I Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi  Mid3")
    next()
}


module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
