import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import states from '../data/cities.json';

const initialState = {
  details: [],
  isLoading: false,
  cities: states,
};

const API_KEY = 'e693c83d8c1a055a2c4f3d603c80717d';

// Get city AQI Data from the API
export const getCityDetail = createAsyncThunk('details', async (coords) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords[0]}&lon=${coords[1]}&appid=${API_KEY}`,
    );
    return response.data.list;
  } catch (e) {
    throw new Error(e);
  }
});

export const detailsSlice = createSlice(
  {
    name: 'details',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
      builder.addCase(getCityDetail.pending, (state) => {
        state.isLoading = true;
      });

      builder.addCase(getCityDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action.payload;
      });

      builder.addCase(getCityDetail.rejected, (state) => {
        state.isLoading = false;
      });
    },
  },
);

export default detailsSlice.reducer;
