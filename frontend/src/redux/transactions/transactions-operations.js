// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    fetchTransactionsRequst,
    fetchTransactionsSuccess,
    fetchTransactionsError,
    // addTransactionsRequst,
    // addTransactionsuccess,
    // addTransactionsError,
} from './transactions-actions';


export const fetchTransactions = () => async dispatch => {
    dispatch(fetchTransactionsRequst());
    try {
        axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGI1MzRmMDc5MzRmY2U1ZDI4YzVmMCIsImlhdCI6MTY0OTM2OTAxNSwiZXhwIjoxNjQ5MzcyNjE1fQ.zNletz7f6LmycUHwH6o_-MXS0WBY_BArMlFZ_kxb5R4`;
      const { data } = await axios.get('http://localhost:3001/api/transactions');
  
      dispatch(fetchTransactionsSuccess(data.data.response));
    } catch (error) {
      dispatch(fetchTransactionsError(error.message));
    }
  };

//   export const addTransactions = ({category, date, comment, income, amount, owner}) => dispatch => {
//     const transaction = {
//         category: category,
//         date: date,
//         comment: comment,
//         income: income,
//         amount: amount,
//         owner: owner
//     };
  
//     dispatch(addTransactionsRequst());
  
//     axios
//       .post('/transactions', transaction)
//       .then(({ data }) => dispatch(addTransactionsuccess(data)))
//       .catch(error => dispatch(addTransactionsError(error.message)));
//   };
