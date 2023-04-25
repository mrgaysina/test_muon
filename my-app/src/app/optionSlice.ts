import { createSlice } from "@reduxjs/toolkit";
// import { Data } from '../data/data';

const initialState: string[] = []

const optionSlice = createSlice({
  name: 'tumbler',
  initialState,
  reducers: {
    dateOptions: (state, action) => {
        state = [...state, action.payload]
    }
  }
})

export const {dateOptions} = optionSlice.actions;

export default optionSlice.reducer;