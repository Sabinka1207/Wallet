import { createSlice } from "@reduxjs/toolkit";
import getStatistics from "./statisticsOperation";
  
  const statisticsSlice = createSlice({
      name: 'statistics',
      initialState: { data: [], isLoading: false, error: null},
      extraReducers: {
        [getStatistics.fulfilled]: (state, { payload }) => {
            return { ...state, data: payload };
        },
        [getStatistics.pending]: state => {
            return {...state, isLoading: true}
        },
        [getStatistics.rejected]: () => state => {
            return {...state, error: null}
        }
    }    
  })
  export default statisticsSlice.reducer;