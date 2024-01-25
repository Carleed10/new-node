const express = require("express")
const signUp = require("../Controllers/Usercontroller")

const router = express.Router()

router.post("/signup", signUp)


module.exports = router