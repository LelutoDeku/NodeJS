const express = require('express')
const path = require('path')
const app = express()
var exphbs = require('express-handlebars')
const port = 30010

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))


app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})