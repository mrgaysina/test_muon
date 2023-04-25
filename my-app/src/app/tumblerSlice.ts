import { createSlice } from "@reduxjs/toolkit";

type Tumbler = {
  arrivals: boolean,
  departures: boolean
}

const initialState: Tumbler = {
  arrivals: true,
  departures: false
}

const tumblerSlice = createSlice({
  name: 'tumbler',
  initialState,
  reducers: {
    changeToArrivals: state => {
      state.arrivals = true;
      state.departures = false;
    },
    changeToDepartures: state => {
      state.arrivals = false;
      state.departures = true;
    }
  }
})

export const {changeToArrivals, changeToDepartures} = tumblerSlice.actions;

export default tumblerSlice.reducer;