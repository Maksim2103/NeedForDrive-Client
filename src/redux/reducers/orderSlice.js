import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAsyncGetCars,
  fetchAsyncGetCities,
  fetchAsyncGetCityCoordinates,
  fetchAsyncGetOrderById,
  fetchAsyncGetOrderStatus,
  fetchAsyncGetPoints,
  fetchAsyncGetPointsCoordinates,
  fetchAsyncGetRate,
  fetchAsyncPostOrder,
} from '../thunks';

const initialState = {
  filteredPoints: [],
  filterParams: {
    category: '',
  },
  orderForm: {
    orderStatusId: {},
    cityId: {
      id: '',
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
    dateTo: '',
    rateId: {
      id: '5fd91571935d4e0be16a3c44',
      rateTypeId: {
        name: '',
      },
    },
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  },
  routingSteps: {
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: true,
  },
};

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setCityName: (state, action) => {
      state.orderForm.cityId = action.payload;
      state.routingSteps.stepOne =
        Boolean(state.orderForm.pointId.address) &&
        Boolean(state.orderForm.cityId.name) &&
        Boolean(action.payload);
    },
    setPoint: (state, action) => {
      state.orderForm.pointId = action.payload;
      state.routingSteps.stepOne =
        Boolean(state.orderForm.pointId.address) &&
        Boolean(state.orderForm.cityId.name) &&
        Boolean(action.payload);
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
      if (state.orderForm.carId.name === '') {
        state.orderForm.carId = action.payload;
        state.routingSteps.stepTwo = Boolean(state.orderForm.carId.name);
        return;
      }
      state.orderForm.carId = action.payload;
      state.orderForm.color = '';
      state.orderForm.dateFrom = '';
      state.orderForm.dateTo = '';
      state.orderForm.rateId = {
        id: '5fd91571935d4e0be16a3c44',
        rateTypeId: {
          name: '',
        },
      };
      state.orderForm.isFullTank = false;
      state.orderForm.isNeedChildChair = false;
      state.orderForm.isRightWheel = false;
      state.routingSteps.stepTwo = Boolean(state.orderForm.carId.name);
      state.routingSteps.stepThree =
        Boolean(state.orderForm.color) &&
        Boolean(state.orderForm.dateFrom) &&
        Boolean(state.orderForm.dateTo) &&
        Boolean(state.orderForm?.rateId.rateTypeId.name);
    },
    setColorCar: (state, action) => {
      state.orderForm.color = action.payload;
      state.routingSteps.stepThree =
        Boolean(state.orderForm.color) &&
        Boolean(state.orderForm.dateFrom) &&
        Boolean(state.orderForm.dateTo) &&
        Boolean(state.orderForm?.rateId.rateTypeId.name) &&
        Boolean(action.payload);
    },
    setRate: (state, action) => {
      state.orderForm.rateId = action.payload;
      state.routingSteps.stepThree =
        Boolean(state.orderForm.color) &&
        Boolean(state.orderForm.dateFrom) &&
        Boolean(state.orderForm.dateTo) &&
        Boolean(state.orderForm?.rateId.rateTypeId.name) &&
        Boolean(action.payload);
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
      state.routingSteps.stepThree =
        Boolean(state.orderForm.color) &&
        Boolean(state.orderForm.dateFrom) &&
        Boolean(state.orderForm.dateTo) &&
        Boolean(state.orderForm.rateId?.rateTypeId.name) &&
        Boolean(action.payload);
    },
    setDateTo: (state, action) => {
      state.orderForm.dateTo = action.payload;
      state.routingSteps.stepThree =
        Boolean(state.orderForm.color) &&
        Boolean(state.orderForm.dateFrom) &&
        Boolean(state.orderForm.dateTo) &&
        Boolean(state.orderForm.rateId?.rateTypeId.name) &&
        Boolean(action.payload);
    },
    setPrice: (state, action) => {
      state.orderForm.price = action.payload;
    },
    setOrderStatus: (state, action) => {
      state.orderForm.orderStatusId = action.payload;
    },
    setOrderForm: (state, action) => {
      console.log(`action`, action);
      state.orderForm = action.payload;
    },
    setStatusDisplayStatus: (state, action) => {
      state.displayStatus = action.payload;
    },
    setDefaultInitialState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // Fetch Order by Id
    builder.addCase(fetchAsyncGetOrderById.pending, (state) => {
      state.dataResponseOrderById = [];
      state.displayStatus = 'pending';
    });
    builder.addCase(fetchAsyncGetOrderById.fulfilled, (state, { payload }) => {
      state.displayStatus = 'display';
      state.orderForm = payload;
      state.routingSteps.stepOne =
        Boolean(payload.pointId.address) && Boolean(payload.cityId.name);
      state.routingSteps.stepTwo = Boolean(payload.carId.name);
      state.routingSteps.stepThree =
        Boolean(payload.color) &&
        Boolean(payload.dateFrom) &&
        Boolean(payload.dateTo) &&
        Boolean(payload.rateId.rateTypeId.name);
    });
    builder.addCase(fetchAsyncGetOrderById.rejected, (state, action) => {
      state.displayStatus = 'display';
      state.errorResponseGetOrderById = action.error.message;
    });

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
      state.dataResponsePostOrder = [];
      state.loadingPostOrder = 'pending';
    });
    builder.addCase(fetchAsyncPostOrder.fulfilled, (state, { payload }) => {
      state.dataResponsePostOrder = payload;
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
export const selectDisplayStatus = (state = []) =>
  state.orderPage.displayStatus;
export const selectResponseIdStatus = (state = []) =>
  state.orderPage.loadingPostOrder;
export const selectResponseCityLoadingStatus = (state = []) =>
  state.orderPage.loadingResponseCities;
export const selectResponsePointsLoadingStatus = (state = []) =>
  state.orderPage.loadingResponsePoints;
export const selectResponseOrderStatusLoading = (state = []) =>
  state.orderPage.loadingResponseOrderStatus;

// orderForm
export const selectOrderForm = (state) => state.orderPage.orderForm;
export const selectCity = (state) => state.orderPage.orderForm.cityId.name;
export const selectPoint = (state) => state.orderPage.orderForm.pointId.address;
export const selectPriceMin = (state) =>
  state.orderPage.orderForm.carId.priceMin;
export const selectPriceMax = (state) =>
  state.orderPage.orderForm.carId.priceMax;
export const selectModel = (state) => state.orderPage.orderForm.carId.name;
export const selectCarImage = (state) =>
  state.orderPage.orderForm.carId.thumbnail.path;
export const selectColor = (state) => state.orderPage.orderForm.color;
export const selectDateFrom = (state) => state.orderPage.orderForm.dateFrom;
export const selectDateTo = (state) => state.orderPage.orderForm.dateTo;
export const selectRatePrice = (state) =>
  state.orderPage.orderForm.rateId?.price;
export const selectRateName = (state) =>
  state.orderPage.orderForm.rateId?.rateTypeId?.name;
export const selectRateId = (state) => state.orderPage.orderForm.rateId?.id;
export const selectPrice = (state) => state.orderPage.orderForm.price;
export const selectIsFullTank = (state) => state.orderPage.orderForm.isFullTank;
export const selectIsNeedChildChair = (state) =>
  state.orderPage.orderForm.isNeedChildChair;
export const selectIsRightWheel = (state) =>
  state.orderPage.orderForm.isRightWheel;
export const selectCurrentId = (state) => state.orderPage.orderForm.carId?.id;
export const selectAvailableColorsCar = (state) =>
  state.orderPage.orderForm.carId?.colors;
export const selectOrderStatus = (state) =>
  state.orderPage.orderForm.orderStatusId.name;
export const selectOrderId = (state) =>
  state.orderPage.dataResponsePostOrder.id;
export const selectCarNumber = (state) =>
  state.orderPage.orderForm.carId?.number;
export const selectCarTank = (state) => state.orderPage.orderForm.carId?.tank;
export const selectUpdateDate = (state) =>
  state.orderPage.orderForm.carId?.updatedAt;

// orderPage
export const selectCategory = (state) => state.orderPage.filterParams.category;
export const selectFilteredPoints = (state) => state.orderPage.filteredPoints;

// Routing Steps
export const selectRoutingSteps = (state) => state.orderPage.routingSteps;

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
  setOrderForm,
  setStatusDisplayStatus,
  setDefaultInitialState,
} = orderSlice.actions;

export default orderSlice.reducer;
