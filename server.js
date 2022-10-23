require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected')
})
const app = express()
app.use(express.static(__dirname + '/public'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
const routesNft = require('./routes/nft.route')
const routesBid = require('./routes/bid.route')

app.use('/api/nft', routesNft)
app.use('/api/bid', routesBid)

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`)
})
