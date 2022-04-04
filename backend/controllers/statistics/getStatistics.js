const CreateError = require('http-errors')
const ObjectId = require("mongoose").Types.ObjectId;

const { Transaction } = require('../../models/transaction');

const getStatistics = async (req, res, next) => {
    try {
      const result = await Transaction.find({});
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  module.exports = getStatistics;