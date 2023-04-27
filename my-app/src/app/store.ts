import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tumblerSlice from './tumblerSlice';
import pickerSlice from './pickerSlice';


export const store = configureStore({
  reducer: {
    tumbler: tumblerSlice,
    picker: pickerSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
