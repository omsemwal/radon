const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

const moment =require ('moment');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
   // useNewUrlParser: true
//})
//.then( () => console.log("MongoDb is connected"))
//.catch ( err => console.log(err) )

const dbhu= function  (req, res, next) {

var currentdate = new Date(); 
var datetime = currentdate.getDate() + " "
                + (currentdate.getMonth()+1)  + " " 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

                let ip=req.ip 
                let url=req.url 

                console.log(`${datetime}  ${ip} ${url}`)

   next()
}





app.use (dbhu)

// function (req, res, next) {
        ///const dateTime =moment().formet('YYYY-MM-DD h:mm:ss a')
       // const ipAddress = req.socket.remoteAddress
       /// const urlPath=req.path
//console.log (dateTime,',', ipAddress, ' ,' ,urlPath);
       // next();
  //}
 // );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
