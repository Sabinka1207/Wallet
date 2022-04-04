const {Transaction} = require("../../models/transaction");
console.log(Transaction);

const gettransactions = async (req, res, next) => {
    const {_id} = req.user;
    const transactions = await Transaction.findOne({owner:_id}).sort({ 'date' : -1 }).populate("owner","_id name email").exec(function(err,post){});
      res.json({
      status: 'success',
      code: 200,
      data:  {
      response: transactions
    }
  })
}

  module.exports = gettransactions;

