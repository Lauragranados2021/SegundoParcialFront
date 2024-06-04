const router = require("express").Router()

const path = require("path")

router.get("/", (req, res)=> res.sendFile(path.join(__dirname + "../../views/index.html")))
router.get("/add", (req, res)=> res.sendFile(path.join(__dirname + "../../views/formt.html")))

module.exports = router