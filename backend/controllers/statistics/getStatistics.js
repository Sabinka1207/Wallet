const CreateError = require('http-errors')
const ObjectId = require("mongoose").Types.ObjectId;

const { Transaction } = require('../../models/transaction');

const getStatistics = async (req, res, next) => {
    try {
      const {date} = req.params
      console.log(date);
      const result = await Transaction.aggregate([{ 
        $project: { 
          doc: "$$ROOT", 
          year: { $year: "$date" }, 
          month: { $month: "$date" }
        } }, {
           $match : { "month" : 02, "year": 2022 } 
          } ] );
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  module.exports = getStatistics;