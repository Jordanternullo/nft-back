const e = require('cors')
const express = require('express')
const Bids = require('../model/bid.model')
const nftModel = require('../model/nft.model')
const router = express.Router()

router.post('/', async (req, res) => {
  const data = new Bids({
    bid: req.body.bid,
    nft: req.body.nft,
    adressWallet: req.body.adressWallet,
  })

  try {
    const dataToSave = await data.save()
    const nft = nftModel.updateOne(
      { _id: req.body.nft },
      { amount: req.body.bid },
      (err, nft) => {
        if (err) {
          res.send(err)
        } else {
          nftModel.findById(req.body.nft, (err, nft) => {
            res.status(200).json(nft)
          })
        }
      }
    )
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
