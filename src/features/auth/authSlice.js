import { createSlice } from "@reduxjs/toolkit";

import { signIn, signUp } from "../../api/userApi.js";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.pending]: state => {
      state.isLoggedIn = false;
    },
    [signIn.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [signIn.rejected]: state => {
      state.isLoggedIn = false;
    }
  }
});

export default authSlice.reducer;
