import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './getCitiesSlice';

const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
});

export default store;
