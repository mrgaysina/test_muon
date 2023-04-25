import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tumblerSlice from './tumblerSlice';
import optionSlice from './optionSlice';


export const store = configureStore({
  reducer: {
    tumbler: tumblerSlice,
    options: optionSlice,
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
