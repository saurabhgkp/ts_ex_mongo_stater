var express = require("express")
var router = express.Router()
var Controller = require("../Controller/user")


router.get("/", Controller.login)

module.exports = router;
