const express = require("express")
var routes = require("./routes/home")
var load = require("express-load")
const app = express()

load("models")
  .then("controllers")
  .then("routes")
  .into(app)

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', routes)

app.listen(3000, () => {
  console.log("Server is running: http://localhost:3000")
})