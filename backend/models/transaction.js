const { Schema, model } = require("mongoose");

const transactionSchema = Schema({
});


const Transaction = model("transaction", transactionSchema);

module.exports = { Transaction };
