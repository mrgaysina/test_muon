import { createSlice } from "@reduxjs/toolkit";
import { Data } from '../data/data';

type DataState = {
  dataArrivals: [],
  dataDepartures: []
}

const initialState: DataState = {
  dataArrivals: [],
  dataDepartures: []
}


const pickerSlice = createSlice({
  name: 'picker',
  initialState,
  reducers: {
    allArrivals: (state, action): void => {
      state.dataArrivals = action.payload
    },
    allDepartures: (state, action): void => {
      state.dataDepartures = action.payload
    }
  }
})

export const {allArrivals, allDepartures} = pickerSlice.actions;

export default pickerSlice.reducer;