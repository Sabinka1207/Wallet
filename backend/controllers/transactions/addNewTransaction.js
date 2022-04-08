const { Transaction} = require('../../models/transaction');

// --------for testing ---------

const addNewTransaction = async (req, res, next) => {
  const {_id} = req.user;
  const {date,comment,income} = req.body;

  const newTransaction = await Transaction.create({date,comment,income,owner:_id});
  res.json({
      status: 'success',
      code: 201,
      data:  {response: newTransaction},
  });

}

// -------------------------------

module.exports = addNewTransaction;