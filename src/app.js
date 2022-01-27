const express = require('express');
const app = express()

app.use(express.static('src/public', { extensions: ['html', 'htm'] }))
app.use(express.json())

const server = require('http').createServer(app)
server.listen(6969, '172.18.113.124', () => {
    console.log("drid kjøre...")
})