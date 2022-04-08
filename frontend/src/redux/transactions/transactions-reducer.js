import {createReducer} from '@reduxjs/toolkit';

import { 
    fetchTransactionsSuccess
    // addTransactionsSuccess,
} from './transactions-actions';


export const transactionsReducer = createReducer([], {
    [fetchTransactionsSuccess]: (_, { payload } ) => payload,
    // [addTransactionsSuccess ]: (state, { payload }) => [...state, payload],
});
