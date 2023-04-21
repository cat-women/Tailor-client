import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk("auth", async (data, thunkAPI) => {
  try {
    const resp = await axios.post("user/register", data);
    return resp.data;
  } catch (error) {
    console.log("signup api error", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signIn = createAsyncThunk("auth", async (data, thunkAPI) => {
  try {
    const resp = await axios.post("user/login", data);

    if (resp.data) {
      localStorage.setItem("user", JSON.stringify(resp.data));
    }
    return resp.data;
  } catch (error) {
    console.log("signin api error", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signOut = createAsyncThunk("auth", async () => {
  localStorage.removeItem("user");
});
