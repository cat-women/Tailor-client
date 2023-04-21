import { createSlice } from "@reduxjs/toolkit";

import { add, getJob, getJobs, update, detele } from "../../api/jobApi.js";

const initialState = {
  data: null,
  isLoading: false
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: {
    [getJobs.pending]: state => {
      state.isLoading = true;
    },
    [getJobs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getJobs.rejected]: state => {
      state.isLoading = false;
    }
  }
});
export default jobsSlice.reducer;
