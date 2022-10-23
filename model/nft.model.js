const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Nfts = new Schema({
  title: {
    type: String,
  },
  amount: {
    type: String,
  },
  image: {
    type: String,
  },
  endTime: {
    type: String,
  },
  category: {
    type: String,
  },
})
module.exports = mongoose.model('Nfts', Nfts)
