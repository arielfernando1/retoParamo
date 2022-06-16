const express = require('express')
const app = express()
const port = 3000
const requestRoutes = require('./routes');
const path = require('path');
app.use('/', requestRoutes);
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
