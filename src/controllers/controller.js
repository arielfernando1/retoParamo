const { render } = require("ejs")
const controller = {}
controller.index = (req,res) => {
    res.render('index')
}
module.exports = controller