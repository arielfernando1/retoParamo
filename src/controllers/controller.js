const { render } = require("ejs")
const controller = {}
controller.index = (req,res) => {
    res.render('index')
}
controller.formulario = (req,res) => {
    res.render('formularioInscripcion')
}
module.exports = controller