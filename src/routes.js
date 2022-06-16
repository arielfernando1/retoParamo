const express = require('express')
const router = express.Router()
const controller = require("./controllers/controller")
router.get('/', controller.index)
router.get('/formulario',controller.formulario)
module.exports = router