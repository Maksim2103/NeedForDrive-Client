import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAsyncGetCities,
  fetchAsyncGetCityCoordinates,
  fetchAsyncGetPoints,
  fetchAsyncGetPointsCoordinates,
} from '../thunks';

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    filteredPoints: [],
    orderForm: {
      orderStatusId: {},
      cityId: {
        name: 'Казань',
      },
      pointId: {
        name: '',
        cityId: {},
        address: '',
      },
      carId: {},
      color: '',
      dateFrom: '',
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
      state.orderForm.cityId.name = action.payload;
    },
    setPoint: (state, action) => {
      state.orderForm.pointId.address = action.payload;
    },
    setFilteredPoints: (state, action) => {
      state.filteredPoints = action.payload;
    },
    setResetPointsCoordinates: (state) => {
      state.dataResponsePointsCoordinates = [];
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

    builder.addCase(fetchAsyncGetPoints.pending, (state) => {
      state.dataResponsePoints = [];
      state.loadingResponsePoints = 'pending';
    });
    builder.addCase(fetchAsyncGetPoints.fulfilled, (state, { payload }) => {
      state.dataResponsePoints = payload;
      state.loadingResponsePoints = 'succeeded';
    });
    builder.addCase(fetchAsyncGetPoints.rejected, (state, action) => {
      state.loadingResponsePoints = 'failed';
      state.errorResponsePoints = action.error.message;
    });

    builder.addCase(fetchAsyncGetCityCoordinates.pending, (state) => {
      state.dataResponseCoordinates = [];
      state.loadingResponseCoordinates = 'pending';
    });
    builder.addCase(
      fetchAsyncGetCityCoordinates.fulfilled,
      (state, payload) => {
        state.dataResponseCoordinates = payload.payload;
        state.loadingResponseCoordinates = 'succeeded';
      },
    );
    builder.addCase(fetchAsyncGetCityCoordinates.rejected, (state, action) => {
      state.loadingResponseCoordinates = 'failed';
      state.errorResponseCoordinates = action.error.message;
    });

    builder.addCase(fetchAsyncGetPointsCoordinates.pending, (state) => {
      state.dataResponsePointsCoordinates = [];
      state.loadingResponsePointsCoordinates = 'pending';
    });
    builder.addCase(
      fetchAsyncGetPointsCoordinates.fulfilled,
      (state, payload) => {
        state.dataResponsePointsCoordinates = [
          ...state.dataResponsePointsCoordinates,
          payload.payload,
        ];
        state.loadingResponsePointsCoordinates = 'succeeded';
      },
    );
    builder.addCase(
      fetchAsyncGetPointsCoordinates.rejected,
      (state, action) => {
        state.loadingResponsePointsCoordinates = 'failed';
        state.errorResponsePointsCoordinates = action.error.message;
      },
    );
  },
});

export const selectResponseCities = (state = []) =>
  state.orderPage.dataResponseCities;
export const selectCity = (state) => state.orderPage.orderForm.cityId.name;
export const selectResponsePoints = (state = []) =>
  state.orderPage.dataResponsePoints;
export const selectOrderForm = (state) => state.orderPage.orderForm;
export const selectCityCoordinate = (state = []) =>
  state.orderPage.dataResponseCoordinates;
export const selectFilteredPoints = (state) => state.orderPage.filteredPoints;
export const selectPointsCoordinates = (state = []) =>
  state.orderPage.dataResponsePointsCoordinates;

export const {
  setCityName,
  setPoint,
  setFilteredPoints,
  setResetPointsCoordinates,
} = orderSlice.actions;

export default orderSlice.reducer;
