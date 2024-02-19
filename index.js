const express = require('express')
const app = express()
const PORT = 3000;
const path = require("path")
app.use(express.static(path.join(__dirname,"public")))

app.get('/api/v1/index', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)