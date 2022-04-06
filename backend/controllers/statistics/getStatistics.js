const { Transaction } = require('../../models');
const ObjectId = require('mongoose').Types.ObjectId;

const getStatistics = async (req, res, next) => {
  try {
    // const { _id } = req.user;
    const { year, month } = req.statisticsParams;
console.log("req.statisticsParams:", req.statisticsParams);
    const FIRST_DAY_OF_MONTH = 1;

    const startYear = year;
    const startMonthIndex = month - 1;
    const endYear = month < 12 ? year : year + 1;
    const endMonthIndex = month < 12 ? startMonthIndex + 1 : 0;

    const startPoint = new Date(startYear, startMonthIndex, FIRST_DAY_OF_MONTH);
    const endPoint = new Date(endYear, endMonthIndex, FIRST_DAY_OF_MONTH);

    const result = await Transaction.aggregate([
      {
        $match: {
          // owner: ObjectId(_id),
          createdAt: {
            $gte: startPoint, 
            $lt: endPoint, 
          },
        },
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'categoryObj',
        },
      },
      {
        $unwind: '$categoryObj',
      },
      {
        $group: {
          _id: { isIncome: '$isIncome', category: '$categoryObj.name' },
          categorySum: { $sum: '$amount' },
        },
      },
      {
        $group: {
          _id: { isIncome: '$_id.isIncome' },
          categories: {
            $push: { category: '$_id.category', categorySum: { $round: ['$categorySum', 2] } },
          },
          totalSum: { $sum: '$categorySum' },
        },
      },
      {
        $project: {
          _id: 0,
          isIncome: '$_id.isIncome',
          categories: '$categories',
          totalSum: { $round: ['$totalSum', 2] },
        },
      },
    ]);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getStatistics;