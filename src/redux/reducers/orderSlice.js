import { createSlice } from '@reduxjs/toolkit';
import { fetchAsyncGetCities } from '../thunks';

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    cityName: 'Ульяновск',
    cityId: '',
    orderForm: {
      orderStatusId: {},
      cityId: {},
      pointId: {},
      carId: {},
      color: 'string',
      dateFrom: 0,
      dateTo: 0,
      rateId: {},
      price: 0,
      isFullTank: true,
      isNeedChildChair: true,
      isRightWheel: true,
    },
  },
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    setCityId: (state, action) => {
      state.cityId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetCities.pending, (state) => {
      state.dataResponseCities = [];
      state.loadingResponseCities = 'pending';
    });
    builder.addCase(fetchAsyncGetCities.fulfilled, (state, { payload }) => {
      state.dataResponseCities = payload;
      state.loadingResponseCities = 'succeeded';
    });
    builder.addCase(fetchAsyncGetCities.rejected, (state, action) => {
      state.loadingResponseCities = 'failed';
      state.errorResponseCities = action.error.message;
    });
  },
});

export const selectResponseCities = (state = []) =>
  state.orderPage.dataResponseCities;
export const selectCity = (state) => state.orderPage.cityName;

export const { setCityName, setCityId } = orderSlice.actions;

export default orderSlice.reducer;
