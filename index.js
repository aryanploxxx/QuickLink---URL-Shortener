const express = require('express')
const app = express()
const fs = require('fs')
const PORT = 3000


app.get('/', (req,res) => {
    res.end("ho")
})

app.get('/about', (req,res) => {
    res.end("ho")
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})