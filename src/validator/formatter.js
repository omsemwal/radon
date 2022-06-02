const trim = function(){
    const a = ("  hariom semwal  ")
    let result = a.trim()
    console.log(result)
}

const changeToLowerCase = function(){
    const a = ("HARIOM SEMWAL")
    let result = a.toLowerCase()
    console.log(result)
}


const changeToUpperCase = function(){
    const a = ("hariom SEMWAL ")
    let result = a.toUpperCase()
    console.log(result)
}
module.exports.changeToUpperCase = changeToUpperCase
module.exports.changeToLowerCase = changeToLowerCase
module.exports.trim = trim