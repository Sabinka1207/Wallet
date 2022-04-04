const {Transaction} = require("../../models/transaction");

const gettransactions = async (req, res, next) => {
    const {_id} = req.user;
    const transactions = await Transaction.findOne({_id}).find({}).sort({ 'date' : -1 }).limit(6);
      res.json({
      status: 'success',
      code: 200,
      data:  {
      response: transactions
    }
  })
}

  module.exports = gettransactions;

