import { createSlice } from "@reduxjs/toolkit";

import {
  getQuotationByJobId,
  getQuotationByUserId
} from "../../api/quotationApi.js";

const initialState = {
  userQuotations: null,
  jobQuotation: null,
  isLoading: false
};
const quotationSlice = createSlice({
  name: "quotation",
  initialState,
  reducers: {},
  extraReducers: {
    [getQuotationByJobId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.jobQuotation = action.payload;
    },

    [getQuotationByUserId.pending]: state => {
      state.isLoading = true;
    },
    [getQuotationByUserId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userQuotations = action.payload;
    },
    [getQuotationByUserId.rejected]: state => {
      state.isLoading = false;
    }
  }
});
export default quotationSlice.reducer;
