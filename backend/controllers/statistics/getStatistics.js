const CreateError = require('http-errors')
const ObjectId = require("mongoose").Types.ObjectId;

const { Transaction } = require('../../models/transaction');

const getStatistics = async (req, res, next) => {
  // try {
  //   console.log(req.user);
  //   const { _id } = req.user;
  //   const { year, month } = req.statisticsParams;

  //   const FIRST_DAY_OF_MONTH = 1;

  //   const startPointYear = year;
  //   const startPointMonthIndex = month - 1;
  //   const endPointYear = month < 12 ? year : year + 1;
  //   const endPointMonthIndex = month < 12 ? startPointMonthIndex + 1 : 0;

  //   const startPoint = new Date(startPointYear, startPointMonthIndex, FIRST_DAY_OF_MONTH);
  //   const endPoint = new Date(endPointYear, endPointMonthIndex, FIRST_DAY_OF_MONTH);

  //   const result = await Transaction.aggregate([
  //     {
  //       $match: {
  //         owner: ObjectId(_id),
  //         createdAt: {
  //           $gte: startPoint, 
  //           $lt: endPoint, 
  //         },
  //       },
  //     },
      // {
      //   $group: {
      //     _id: { income: '$income', category: '$category' },
      //     categorySum: { $sum: '$amount' },
      //   },
      // },
      // {
      //   $group: {
      //     _id: { income: '$_id.income' },
      //     categories: {
      //       $push: { category: '$_id.category', categorySum: { $round: ['$categorySum', 2] } },
      //     },
      //     totalSum: { $sum: '$categorySum' },
      //   },
      // },
      // {
      //   $project: {
      //     _id: 0,
      //     income: '$_id.income',
      //     categories: '$categories',
      //     totalSum: { $round: ['$totalSum', 2] },
      //   },
      // },
  //   ]);

  //   return res.status(200).json(result);
  // } catch (error) {
  //   next(error);
  // }
    try {
      console.log(req.user);
        const { _id } = req.user;
      const {month, year} = req.params
      console.log(req.params);
      const result = await Transaction.aggregate([
          {
            $group: {
              _id: { income: '$income', category: '$category' },
              categorySum: { $sum: '$amount' },
            },
          },
          {
            $group: {
              _id: { income: '$_id.income' },
              categories: {
                $push: { category: '$_id.category', categorySum: { $round: ['$categorySum', 2] } },
              },
              totalSum: { $sum: '$categorySum' },
            },
          },
          // { 
          //   $project: { 
          //     doc: "$$ROOT", 
          //     year: { $year: "$date" }, 
          //     month: { $month: "$date" }
          //   } 
          // }, 
            { 
              $match : { 
                owner: ObjectId(_id),
                date: { month, year }
              } 
            },
          {
            $project: {
              _id: 0,
              doc: "$$ROOT", 
              year: { $year: "$date" }, 
              month: { $month: "$date" },
              income: '$_id.income',
              categories: '$categories',
              totalSum: { $round: ['$totalSum', 2] },
            },
          },
        ] );
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  module.exports = getStatistics;