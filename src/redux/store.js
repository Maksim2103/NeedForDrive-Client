import { configureStore } from '@reduxjs/toolkit';

import orderReducer from './reducers/orderSlice';

const store = configureStore({
  reducer: {
    orderPage: orderReducer,
  },
});

export default store;
