import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addJob = createAsyncThunk(async (data, thunkAPI) => {
  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json"
  };
  try {
    const resp = await axios.post("/job/add", data, { headers });
    return;
  } catch (error) {
    console.log("Add job Error", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getJobs = createAsyncThunk("jobs", async thunkAPI => {
  try {
    const resp = await axios.get(`/job`);
    return resp.data;
  } catch (error) {
    console.log("Get all Job", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getUserJob = createAsyncThunk("job", async (id, thunkAPI) => {
  try {
    console.log("this is get job api");
    const resp = await axios.get(`/job/${id}`);
    return resp.data;
  } catch (error) {
    console.log("Add job Error", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateJob = createAsyncThunk("job", async (id, data, thunkAPI) => {
  try {
    const resp = await axios.post(`/job/get/${id}`, data);

    return resp.data;
  } catch (error) {
    console.log("Update Job", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteJob = createAsyncThunk("job", async (id, thunkAPI) => {
  try {
    const resp = await axios.post(`/job/get/${id}`);
    return resp.data;
  } catch (error) {
    console.log("Update Job", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
