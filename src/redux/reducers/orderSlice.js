import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAsyncGetCars,
  fetchAsyncGetCities,
  fetchAsyncGetCityCoordinates,
  fetchAsyncGetPoints,
  fetchAsyncGetPointsCoordinates,
} from '../thunks';

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    filteredPoints: [],
    filterParams: {
      category: '',
    },
    orderForm: {
      orderStatusId: {},
      cityId: {
        name: '',
      },
      pointId: {
        name: '',
        cityId: {},
        address: '',
      },
      carId: {
        priceMax: '',
        priceMin: '',
        name: '',
        thumbnail: {},
        description: '',
        categoryId: {
          name: '',
        },
        colors: [''],
      },
      color: '',
      dateFrom: '',
      dateTo: 0,
      rateId: {
        name: '',
      },
      price: 0,
      isFullTank: false,
      isNeedChildChair: false,
      isRightWheel: false,
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
    setResetCityAndPointValues: (state) => {
      state.dataResponsePointsCoordinates = [];
      state.orderForm.cityId.name = '';
      state.orderForm.pointId.address = '';
    },
    setCategory: (state, action) => {
      state.filterParams.category = action.payload;
    },
    setFilteredCar: (state, action) => {
      state.orderForm.carId = action.payload;
    },
    setColorCar: (state, action) => {
      state.orderForm.color = action.payload;
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

    builder.addCase(fetchAsyncGetCars.pending, (state) => {
      state.dataResponseCars = [];
      state.loadingResponseCars = 'pending';
    });
    builder.addCase(fetchAsyncGetCars.fulfilled, (state, { payload }) => {
      state.dataResponseCars = payload;
      state.loadingResponseCars = 'succeeded';
    });
    builder.addCase(fetchAsyncGetCars.rejected, (state, action) => {
      state.loadingResponseCars = 'failed';
      state.errorResponseCars = action.error.message;
    });
  },
});

export const selectResponseCities = (state = []) =>
  state.orderPage.dataResponseCities;
export const selectCity = (state) => state.orderPage.orderForm.cityId.name;
export const selectPoint = (state) => state.orderPage.orderForm.pointId.address;
export const selectPriceMin = (state) =>
  state.orderPage.orderForm.carId.priceMin;
export const selectPriceMax = (state) =>
  state.orderPage.orderForm.carId.priceMax;
export const selectModel = (state) => state.orderPage.orderForm.carId.name;
export const selectCategory = (state) => state.orderPage.filterParams.category;
export const selectColor = (state) => state.orderPage.orderForm.color;
export const selectDateFrom = (state) => state.orderPage.orderForm.dateFrom;
export const selectDateTo = (state) => state.orderPage.orderForm.dateTo;
export const selectRate = (state) => state.orderPage.orderForm.rateId.name;
export const selectPrice = (state) => state.orderPage.orderForm.price;
export const selectIsFullTank = (state) => state.orderPage.orderForm.isFullTank;
export const selectIsNeedChildChair = (state) =>
  state.orderPage.orderForm.isNeedChildChair;
export const selectIsRightWheel = (state) =>
  state.orderPage.orderForm.isRightWheel;
export const selectResponsePoints = (state = []) =>
  state.orderPage.dataResponsePoints;
export const selectOrderForm = (state) => state.orderPage.orderForm;
export const selectCityCoordinate = (state = []) =>
  state.orderPage.dataResponseCoordinates;
export const selectFilteredPoints = (state) => state.orderPage.filteredPoints;
export const selectPointsCoordinates = (state = []) =>
  state.orderPage.dataResponsePointsCoordinates;
export const selectResponseCars = (state = []) =>
  state.orderPage.dataResponseCars;
export const selectResponseCarsStatus = (state = []) =>
  state.orderPage.loadingResponseCars;
export const selectCurrentId = (state = []) =>
  state.orderPage.orderForm.carId?.id;
export const selectAvailableColorsCar = (state = []) =>
  state.orderPage.orderForm.carId?.colors;

export const {
  setCityName,
  setPoint,
  setFilteredPoints,
  setResetPointsCoordinates,
  setResetCityAndPointValues,
  setCategory,
  setFilteredCar,
  setColorCar,
} = orderSlice.actions;

export default orderSlice.reducer;
