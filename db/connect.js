const dotenv = require('dotenv');
dotenv.config();
const {MongoClient} = require('mongodb')


const client = new MongoClient('mongodb+srv://ryanalvord:Luckysandwich7@luckysandwich7.vymsung.mongodb.net/test')

async function start(){
  await client.connect()
  console.log("Connected")
  module.exports = client.db()
}

  start()

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};