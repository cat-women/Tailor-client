import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import jobsReducer from "./features/jobs/jobsSlice";
import jobReducer from "./features/jobs/jobSlice";
import quotationReducer from "./features/quotation/quotationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer,
    job: jobReducer,
    quotations: quotationReducer
  }
});
