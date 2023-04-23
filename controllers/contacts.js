// displayQuote = (req, res) => {
//     const data =
//       "Back to school. Back to school, to prove to Dad that I'm not a fool. I got my lunch packed up, my boots tied tight, I hope I don't get in a fight. Ohhhh, back to school. Back to school. Back to school. Well, here goes nothing.";
//     res.status(200).send(data);
//   };
  
//   module.exports = {
//     displayQuote,
//   };

const mongodb = require('../db/connect.js');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('cse341').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAll, getSingle };