const { MongoClient } = require('mongodb')
const Db =
  'mongodb+srv://jordan:LGD3QljImkE51Gdr@cluster0.kr4smty.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

var _db

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db('nft')
        console.log('Successfully connected to MongoDB.')
      }
      return callback(err)
    })
  },

  getDb: function () {
    return _db
  },
}
