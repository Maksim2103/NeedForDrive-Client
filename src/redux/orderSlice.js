import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    isBreadCrumbs: true,
  },
  reducers: {
    hiddenBreadCrumbs(state, action) {
      state.isBreadCrumbs = false;
    },
  },
});

export const { hiddenBreadCrumbs } = orderSlice.actions;

export default orderSlice.reducer;
