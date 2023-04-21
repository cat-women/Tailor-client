import { createSlice } from "@reduxjs/toolkit";

import { getUserJob, update, detele } from "../../api/jobApi.js";

const initialState = {
  data: null,
  isLoading: false
};
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserJob.pending]: state => {
      state.isLoading = true;
    },
    [getUserJob.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getUserJob.rejected]: state => {
      state.isLoading = false;
    }
  }
});
export default jobSlice.reducer;
