const express = require('express')
const Nfts = require('../model/nft.model')
const router = express.Router()
const multer = require('multer')
var storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`)
  },
})

const upload = multer({ storage: storage })

router.post('/', upload.single('image'), async (req, res) => {
  const data = new Nfts({
    title: req.body.title,
    amount: req.body.amount,
    image: req.file.filename,
    endTime: req.body.endTime,
    category: req.body.category,
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await Nfts.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
