const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const BookController= require("../controllers/Bookcontroller")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

/

router.post("/createBook", BookController.createBook)

router.get("/getBookData", BookController.getBookData)

router.post("/getBooksInyear", BookController.getBooksInyear)

router.post("/getparticularBooks", BookController.getparticularBooks)
router.post("/getXINERBooks", BookController.getXINERBooks)

router.post("/getrandomBooks", BookController.getrandomBooks)

module.exports = router;