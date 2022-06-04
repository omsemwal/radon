const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})
router.get("/soll", function (req, res) {
    let arr= [1,2,3,5,6,7]

    let total = 0;
    for (var i in arr){
        total =total + arr[i];
    }
    let lastDigit= arr.pop()
    let consecutivesum= lastDigit * (lastDigit+1) /2
    let missingNumber= consecutivesum - total

    res.send(  { data: missingNumber } );
    

})
router.get("/sol2", function (req, res) {
    let arr= [33,34,35,37,38]
    let len= arr.length

    let total = 0;
    for (var i in arr) {
        total =total + arr[i];
    }
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutivesum= (len + 1)  * (firstDigit + lastDigit) /2
    let missingNumber= consecutivesum - total

    res.send(  { data: missingNumber } );
});

            // Using the chunk function

       
        













router.get('/g', function (req, res) {
    let movies =["Rang de basanti", "shining", "lord of rings", "batman begins"]
    //console.log(movies)
    res.send(movies)



})
router.get('/movies/:index', function (req, res) {
    let movies = ["Rang de basant", "The shining", "Lord of the rings", "Batman begins"]
    console.log("movie name is " + movies[req.params.index])
    res.send(movies[req.params.index])

})
router.get('/video/:index', function (req, res) {
    let video = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

    if (req.params.index < video.length) {
        console.log("Movie name is " + video[req.params.index])
    } else {
        console.log("Please enter the valid index value " + (video[req.params.index] = " "))
    }

    res.send(video[req.params.index])

})
router.get('/films', function (req, res) {
    let arrayObj = [{ "id": 1, "name": "The Shining" }, { "id": 2, "name": "Incendies" }, { "id": 3, "name": "Rang de Basanti" }, { "id": 4, "name": "Finding Nemo" }]
    console.log(arrayObj)
    res.send(arrayObj) 
})
router.get('/films/:filmId', function (req, res) {
    let arrayObj = [{ "id": 1, "name": "The Shining" }, { "id": 2, "name": "Incendies" }, { "id": 3, "name": "Rang de Basanti" }, { "id": 4, "name": "Finding Nemo" }]
    if (req.params.filmId <= arrayObj.length ){
        console.log("Movie name is " +  arrayObj[req.params.filmId])

    }else{
        console.log("No movie exists with this id" + (arrayObj[req.params.filmId] = " "))
 }
        res.send(arrayObj[req.params.filmId])
})
module.exports = router;
// adding this comment for no reason