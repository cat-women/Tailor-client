import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addQuotation = createAsyncThunk(
  "quotations",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.post("/quotation", data);
      return resp.data;
    } catch (error) {
      console.log("quotation job Error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getQuotationByUserId = createAsyncThunk(
  "quotations",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(`/quotation/user/${id}`);
      return resp.data;
    } catch (error) {
      console.log("Get all quotation", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getQuotationByJobId = createAsyncThunk(
  "quotations",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(`/quotation/job/${id}`);
      return resp.data;
    } catch (error) {
      console.log("Get  quotation", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateQuotation = createAsyncThunk(
  "quotations",
  async (id, data, thunkAPI) => {
    try {
      const resp = await axios.put(`/quotation/${id}`, data);

      return resp.data;
    } catch (error) {
      console.log("Update quotation", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteQuotation = createAsyncThunk(
  "quotations",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(`/quotation/${id}`);
      return resp.data;
    } catch (error) {
      console.log("Delete quotation", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
