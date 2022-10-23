const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Bid = new Schema({
  nft: {
    type: String,
  },
  bid: {
    type: String,
  },
  adressWallet: {
    type: String,
  },
})
module.exports = mongoose.model('Bids', Bid)
