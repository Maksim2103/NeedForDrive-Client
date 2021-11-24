import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAsyncGetCars,
  fetchAsyncGetCities,
  fetchAsyncGetCityCoordinates,
  fetchAsyncGetOrderStatus,
  fetchAsyncGetPoints,
  fetchAsyncGetPointsCoordinates,
  fetchAsyncGetRate,
  fetchAsyncPostOrder,
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
        id: '',
        value: '',
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
      dateTo: '',
      rateId: {
        rateTypeId: {
          name: '',
        },
      },
      price: 0,
      isFullTank: false,
      isNeedChildChair: false,
      isRightWheel: false,
    },
  },
  reducers: {
    setCityName: (state, action) => {
      state.orderForm.cityId = action.payload;
    },
    setPoint: (state, action) => {
      state.orderForm.pointId = action.payload;
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
    setRate: (state, action) => {
      state.orderForm.rateId = action.payload;
    },
    setIsFullTank: (state, action) => {
      state.orderForm.isFullTank = action.payload;
    },
    setIsChildChair: (state, action) => {
      state.orderForm.isNeedChildChair = action.payload;
    },
    setIsRightWheel: (state, action) => {
      state.orderForm.isRightWheel = action.payload;
    },
    setDateFrom: (state, action) => {
      state.orderForm.dateFrom = action.payload;
    },
    setDateTo: (state, action) => {
      state.orderForm.dateTo = action.payload;
    },
    setPrice: (state, action) => {
      state.orderForm.price = action.payload;
    },
    setOrderStatus: (state, action) => {
      state.orderForm.orderStatusId = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch list of cities
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

    // Fetch list of points
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

    // Fetch City coordinates
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

    // Fetch City and point coordinates
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

    // Fetch List of Cars
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

    // Fetch Rate of car
    builder.addCase(fetchAsyncGetRate.pending, (state) => {
      state.dataResponseRate = [];
      state.loadingResponseRate = 'pending';
    });
    builder.addCase(fetchAsyncGetRate.fulfilled, (state, { payload }) => {
      state.dataResponseRate = payload;
      state.loadingResponseRate = 'succeeded';
    });
    builder.addCase(fetchAsyncGetRate.rejected, (state, action) => {
      state.loadingResponseRate = 'failed';
      state.errorResponseRate = action.error.message;
    });

    // Fetch Order Status
    builder.addCase(fetchAsyncGetOrderStatus.pending, (state) => {
      state.dataResponseOrderStatus = [];
      state.loadingResponseOrderStatus = 'pending';
    });
    builder.addCase(
      fetchAsyncGetOrderStatus.fulfilled,
      (state, { payload }) => {
        state.dataResponseOrderStatus = payload;
        state.loadingResponseOrderStatus = 'succeeded';
      },
    );
    builder.addCase(fetchAsyncGetOrderStatus.rejected, (state, action) => {
      state.loadingResponseOrderStatus = 'failed';
      state.errorResponseOrderStatus = action.error.message;
    });

    // Fetch Post Order
    builder.addCase(fetchAsyncPostOrder.pending, (state) => {
      state.loadingPostOrder = 'pending';
    });
    builder.addCase(fetchAsyncPostOrder.fulfilled, (state) => {
      state.loadingPostOrder = 'succeeded';
    });
    builder.addCase(fetchAsyncPostOrder.rejected, (state, action) => {
      state.loadingPostOrder = 'failed';
      state.errorPostOrder = action.error.message;
    });
  },
});

// data Response from Fetch
export const selectResponseCities = (state = []) =>
  state.orderPage.dataResponseCities;
export const selectResponsePoints = (state = []) =>
  state.orderPage.dataResponsePoints;
export const selectResponseCityCoordinate = (state = []) =>
  state.orderPage.dataResponseCoordinates;
export const selectResponsePointsCoordinates = (state = []) =>
  state.orderPage.dataResponsePointsCoordinates;
export const selectResponseCars = (state = []) =>
  state.orderPage.dataResponseCars;
export const selectResponseRateData = (state = []) =>
  state.orderPage.dataResponseRate;
export const selectResponseOrderStatusData = (state = []) =>
  state.orderPage.dataResponseOrderStatus;

// data Response Status
export const selectResponseCarsStatus = (state = []) =>
  state.orderPage.loadingResponseCars;

// orderForm
export const selectOrderForm = (state) => state.orderPage.orderForm;
export const selectCity = (state) => state.orderPage.orderForm.cityId.value;
export const selectPoint = (state) => state.orderPage.orderForm.pointId.address;
export const selectPriceMin = (state) =>
  state.orderPage.orderForm.carId.priceMin;
export const selectPriceMax = (state) =>
  state.orderPage.orderForm.carId.priceMax;
export const selectModel = (state) => state.orderPage.orderForm.carId.name;
export const selectColor = (state) => state.orderPage.orderForm.color;
export const selectDateFrom = (state) => state.orderPage.orderForm.dateFrom;
export const selectDateTo = (state) => state.orderPage.orderForm.dateTo;
export const selectRatePrice = (state) =>
  state.orderPage.orderForm.rateId?.price;
export const selectRateName = (state) =>
  state.orderPage.orderForm.rateId?.rateTypeId.name;
export const selectPrice = (state) => state.orderPage.orderForm.price;
export const selectIsFullTank = (state) => state.orderPage.orderForm.isFullTank;
export const selectIsNeedChildChair = (state) =>
  state.orderPage.orderForm.isNeedChildChair;
export const selectIsRightWheel = (state) =>
  state.orderPage.orderForm.isRightWheel;
export const selectCurrentId = (state = []) =>
  state.orderPage.orderForm.carId?.id;
export const selectAvailableColorsCar = (state = []) =>
  state.orderPage.orderForm.carId?.colors;

// orderPage
export const selectCategory = (state) => state.orderPage.filterParams.category;
export const selectFilteredPoints = (state) => state.orderPage.filteredPoints;

export const {
  setCityName,
  setPoint,
  setFilteredPoints,
  setResetPointsCoordinates,
  setResetCityAndPointValues,
  setCategory,
  setFilteredCar,
  setColorCar,
  setRate,
  setIsFullTank,
  setIsChildChair,
  setIsRightWheel,
  setDateFrom,
  setDateTo,
  setPrice,
  setOrderStatus,
} = orderSlice.actions;

export default orderSlice.reducer;
