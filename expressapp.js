// nodejs me https server se sb define krna padta tha , get/post and if/else need END many thing else, express is readymade.
const express = require('express')
// const hasOwnProperty = require('has')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello, world!")
})

app.get('/about', (req, res) => {
    res.send("This is about page!")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// npx kill-port 3000