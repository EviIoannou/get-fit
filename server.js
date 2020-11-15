const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
app = express()
//serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// serve different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)
